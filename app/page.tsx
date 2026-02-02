'use client';
import Link from 'next/link';
import Button from '../components/Button';
import Card from '../components/Card';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Elements */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '50%', height: '50%', background: 'var(--primary)', filter: 'blur(150px)', opacity: '0.2', zIndex: -1 }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '50%', height: '50%', background: 'var(--secondary)', filter: 'blur(150px)', opacity: '0.2', zIndex: -1 }}></div>

      <div style={{ textAlign: 'center', padding: '0 20px', maxWidth: '800px', zIndex: 1 }}>
        <h1 className="hero-title">
          Conecte-se ao <br />
          <span className="gradient-text">Futuro do Marketing</span>
        </h1>
        
        <p style={{ fontSize: '1.25rem', color: '#888', marginBottom: '40px', lineHeight: '1.6' }}>
          A plataforma premium onde produtores visionários encontram afiliados de alta performance. 
          Sem taxas ocultas. Monetizado para todos.
        </p>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/producer">
            <Button variant="primary">
              Sou Produtor
            </Button>
          </Link>
          <Link href="/affiliate">
            <Button variant="outline">
              Sou Afiliado
            </Button>
          </Link>
        </div>
      </div>

      <div style={{ marginTop: '80px', display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
        <Card className="glass" style={{ width: '300px' }}>
          <h3 style={{ color: 'var(--primary)', marginBottom: '10px' }}>Para Produtores</h3>
          <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Anuncie seus produtos para milhares de afiliados prontos para vender por você.</p>
        </Card>
        <Card className="glass" style={{ width: '300px' }}>
          <h3 style={{ color: 'var(--secondary)', marginBottom: '10px' }}>Para Afiliados</h3>
          <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Encontre produtos de alta conversão e monetize sua audiência instantaneamente.</p>
        </Card>
      </div>

      <footer style={{ marginTop: '60px', padding: '20px', color: '#666', fontSize: '0.8rem', textAlign: 'center', width: '100%', borderTop: '1px solid var(--card-border)' }}>
        <p>&copy; 2026 Seletor de Afiliados. Design Premium.</p>
        <div style={{ marginTop: '10px' }}>
          <a href="https://vercel.com/new" target="_blank" style={{ color: '#aaa', textDecoration: 'underline' }}>Deploy on Vercel ▲</a>
        </div>
      </footer>
    </main>
  );
}
