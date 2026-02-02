'use client';
import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { productService, Product } from '../../services/productService';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { useAuth } from '../../context/AuthContext';

import { useToast } from '../../context/ToastContext';

function ProductDetailsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { userType } = useAuth();
  const { addToast } = useToast();
  const id = searchParams.get('id');
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      productService.getById(Number(id)).then((p) => {
        setProduct(p || null);
        setLoading(false);
      });
    }
  }, [id]);

  if (!id) return <div className="p-10 text-center">Produto não encontrado.</div>;
  if (loading) return <div className="p-10 text-center text-primary animate-pulse">Carregando detalhes...</div>;
  if (!product) return <div className="p-10 text-center">Produto inválido.</div>;

  const handleAction = () => {
    if (userType === 'producer') {
      addToast('Modo edição ativado (Mock)', 'info');
    } else {
      // Save to localStorage
      const currentAffiliations = JSON.parse(localStorage.getItem('seletor_affiliations') || '[]');
      if (!currentAffiliations.includes(product.id)) {
        currentAffiliations.push(product.id);
        localStorage.setItem('seletor_affiliations', JSON.stringify(currentAffiliations));
      }
      
      addToast(`Parabéns! Você se afiliou ao produto: ${product.name}`, 'success');
      router.push('/affiliate/my-products');
    }
  };

  return (
    <div style={{ minHeight: '100vh', padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <Button variant="ghost" onClick={() => router.back()} style={{ marginBottom: '20px' }}>&larr; Voltar</Button>
      
      <Card>
        <div style={{ height: '300px', background: '#222', borderRadius: '12px', marginBottom: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444', fontSize: '2rem' }}>
          Imagem do Produto
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
          <div>
            <span style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase' }}>{product.category}</span>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', lineHeight: 1.2, margin: '10px 0' }}>{product.name}</h1>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{product.price}</div>
            <div style={{ color: 'var(--secondary)', fontSize: '0.9rem' }}>Comissão: {product.commission}</div>
          </div>
        </div>

        <p style={{ color: '#aaa', lineHeight: 1.6, fontSize: '1.1rem', marginBottom: '40px' }}>
          {product.description}
        </p>

        <Button 
          variant="primary" 
          style={{ width: '100%', padding: '15px', fontSize: '1.2rem' }}
          onClick={handleAction}
        >
          {userType === 'producer' ? 'Editar Dados' : 'Solicitar Afiliação'}
        </Button>
      </Card>
    </div>
  );
}

export default function ProductPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Carregando...</div>}>
      <ProductDetailsContent />
    </Suspense>
  );
}
