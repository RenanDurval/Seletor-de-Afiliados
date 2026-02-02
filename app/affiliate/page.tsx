'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/Button';
import Card from '../../components/Card';
import AdBanner from '../../components/AdBanner';

export default function AffiliatePage() {
  const { userType, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && userType !== 'affiliate') {
      router.push('/login');
    }
  }, [userType, isLoading, router]);
  
  const products = [
    { id: 1, name: 'Renderização 3D Master', commission: '50%', price: 'R$ 297', hot: true },
    { id: 2, name: 'Finanças Pessoais Pro', commission: '70%', price: 'R$ 97', hot: false },
    { id: 3, name: 'Inglês em 30 Dias', commission: '40%', price: 'R$ 997', hot: true },
    { id: 4, name: 'Pack de Design Premium', commission: '60%', price: 'R$ 47', hot: false },
  ];

  return (
    <div style={{ minHeight: '100vh', padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <Link href="/">
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }} className="gradient-text">SeletorApp</span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Link href="/affiliate/my-products" style={{ color: '#aaa', fontSize: '0.9rem', fontWeight: 'bold', marginRight: '10px' }}>Meus Produtos</Link>
          <Link href="/profile" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <span style={{ color: '#888' }}>Olá, Afiliado</span>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#000', cursor: 'pointer' }}>A</div>
          </Link>
        </div>
      </header>

      <AdBanner />

      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Mercado de Afiliação</h2>
      
      <div className="responsive-grid">
        {products.map((p) => (
          <Card key={p.id} style={{ position: 'relative' }}>
            {p.hot && (
              <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'var(--secondary)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>
                HOT
              </div>
            )}
            <Link href={`/product?id=${p.id}`} style={{ display: 'block', height: '100%', textDecoration: 'none' }}>
              <div style={{ height: '150px', background: '#222', borderRadius: '8px', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444' }}>
                Preview
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{p.name}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#aaa', fontSize: '0.9rem', marginBottom: '20px' }}>
                <span>Ganhe até: <strong style={{ color: 'var(--primary)' }}>{p.commission}</strong></span>
                <span>Preço: {p.price}</span>
              </div>
            </Link>
            <Button style={{ width: '100%' }}>Afiliar-se Agora</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
