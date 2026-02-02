'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/Button';
import Card from '../../components/Card';
import AdBanner from '../../components/AdBanner';

import { useToast } from '../../context/ToastContext';

export default function ProducerPage() {
  const { userType, isLoading } = useAuth();
  const { addToast } = useToast();
  const router = useRouter();
  const [products, setProducts] = useState([
    { id: 1, name: 'Curso de Marketing Digital 2.0', commission: '60%', price: 'R$ 497' },
  ]);

  useEffect(() => {
    if (!isLoading && userType !== 'producer') {
      router.push('/login');
    }
  }, [userType, isLoading, router]);

  if (isLoading || userType !== 'producer') return null;

  const handleCreate = () => {
    addToast("Produto criado com sucesso! (Mock)", "success");
    const newId = products.length + 1;
    setProducts([...products, { id: newId, name: `Novo Produto #${newId}`, commission: '50%', price: 'R$ 197' }]);
  };

  return (
    <div style={{ minHeight: '100vh', padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <Link href="/">
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }} className="gradient-text">SeletorApp</span>
        </Link>
        <Link href="/profile" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <span style={{ color: '#888' }}>Olá, Produtor</span>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#000', cursor: 'pointer' }}>P</div>
        </Link>
      </header>

      <AdBanner />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '2rem' }}>Seus Produtos</h2>
        <Button onClick={handleCreate}>+ Novo Produto</Button>
      </div>

      <div className="responsive-grid">
        {products.map((p) => (
          <Card key={p.id}>
            <div style={{ height: '150px', background: '#222', borderRadius: '8px', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444' }}>
              Imagem do Produto
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{p.name}</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#aaa', fontSize: '0.9rem', marginBottom: '20px' }}>
              <span>Comissão: <strong style={{ color: 'var(--primary)' }}>{p.commission}</strong></span>
              <span>Preço: {p.price}</span>
            </div>
            <Button variant="outline" style={{ width: '100%' }}>Gerenciar</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
