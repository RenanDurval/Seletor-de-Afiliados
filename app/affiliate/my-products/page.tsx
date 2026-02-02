'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '../../../components/Button';
import Card from '../../../components/Card';
import { productService, Product } from '../../../services/productService';

export default function MyAffiliationsPage() {
  const [affiliations, setAffiliations] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load affiliations from localStorage
    const saved = localStorage.getItem('seletor_affiliations');
    if (saved) {
      const ids = JSON.parse(saved);
      // Fetch details for each saved ID
      Promise.all(ids.map((id: number) => productService.getById(id)))
        .then((products) => {
          setAffiliations(products.filter(p => p !== undefined) as Product[]);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div style={{ minHeight: '100vh', padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <Link href="/affiliate">
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }} className="gradient-text">SeletorApp</span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link href="/affiliate" style={{ color: '#aaa', fontWeight: 'bold' }}>Marketplace</Link>
            <Link href="/affiliate/my-products" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Meus Produtos</Link>
        </div>
      </header>

      <h2 className="section-title">Minhas Afiliações</h2>

      {loading ? (
        <div className="p-10 text-center animate-pulse">Carregando...</div>
      ) : affiliations.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '50px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px' }}>
          <p style={{ color: '#888', marginBottom: '20px' }}>Você ainda não é afiliado de nenhum produto.</p>
          <Link href="/affiliate">
            <Button variant="primary">Explorar Mercado</Button>
          </Link>
        </div>
      ) : (
        <div className="responsive-grid">
          {affiliations.map((p) => (
            <Card key={p.id}>
              <div style={{ height: '150px', background: '#222', borderRadius: '8px', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444' }}>
                {p.name}
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{p.name}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#aaa', fontSize: '0.9rem', marginBottom: '20px' }}>
                <span>Comissão: <strong style={{ color: 'var(--primary)' }}>{p.commission}</strong></span>
              </div>
              <div style={{ background: 'rgba(0, 255, 0, 0.1)', color: '#4ade80', padding: '10px', borderRadius: '6px', textAlign: 'center', fontSize: '0.9rem', marginBottom: '15px' }}>
                Status: Ativo
              </div>
              <Button variant="outline" style={{ width: '100%' }}>Ver Links</Button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
