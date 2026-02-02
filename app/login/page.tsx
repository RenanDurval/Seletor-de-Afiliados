'use client';
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/Button';
import Card from '../../components/Card';

export default function LoginPage() {
  const { login } = useAuth();
  const [activeTab, setActiveTab] = useState<'producer' | 'affiliate'>('affiliate');

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '20px'
    }}>
      <Card style={{ maxWidth: '400px', width: '100%', textAlign: 'center' }}>
        <h1 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '10px' }}>Bem-vindo</h1>
        <p style={{ color: '#888', marginBottom: '30px' }}>Acesse sua área exclusiva</p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', background: 'rgba(255,255,255,0.05)', padding: '5px', borderRadius: '8px' }}>
          <button 
            onClick={() => setActiveTab('affiliate')}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '6px',
              border: 'none',
              background: activeTab === 'affiliate' ? 'var(--secondary)' : 'transparent',
              color: activeTab === 'affiliate' ? '#fff' : '#888',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s'
            }}
          >
            Sou Afiliado
          </button>
          <button 
            onClick={() => setActiveTab('producer')}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '6px',
              border: 'none',
              background: activeTab === 'producer' ? 'var(--primary)' : 'transparent',
              color: activeTab === 'producer' ? '#000' : '#888',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s'
            }}
          >
            Sou Produtor
          </button>
        </div>

        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
          <label style={{ display: 'block', color: '#aaa', marginBottom: '5px', fontSize: '0.9rem' }}>Email</label>
          <input 
            type="email" 
            placeholder="seu@email.com" 
            style={{ 
              width: '100%', 
              padding: '12px', 
              borderRadius: '8px', 
              border: '1px solid #333', 
              background: 'rgba(0,0,0,0.3)', 
              color: 'white',
              outline: 'none'
            }} 
          />
        </div>

        <div style={{ marginBottom: '30px', textAlign: 'left' }}>
          <label style={{ display: 'block', color: '#aaa', marginBottom: '5px', fontSize: '0.9rem' }}>Senha</label>
          <input 
            type="password" 
            placeholder="••••••••" 
            style={{ 
              width: '100%', 
              padding: '12px', 
              borderRadius: '8px', 
              border: '1px solid #333', 
              background: 'rgba(0,0,0,0.3)', 
              color: 'white',
              outline: 'none'
            }} 
          />
        </div>

        <Button 
          variant={activeTab === 'producer' ? 'primary' : 'outline'} 
          style={{ width: '100%', borderColor: activeTab === 'affiliate' ? 'var(--secondary)' : '', color: activeTab === 'affiliate' ? 'var(--secondary)' : '' }}
          onClick={() => login(activeTab)}
        >
          Entrar como {activeTab === 'producer' ? 'Produtor' : 'Afiliado'}
        </Button>

      </Card>
    </div>
  );
}
