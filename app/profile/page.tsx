'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { useAuth } from '../../context/AuthContext';

import { useToast } from '../../context/ToastContext';

export default function ProfilePage() {
  const { userType } = useAuth();
  const { addToast } = useToast();
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    bio: '',
    pixKey: ''
  });

  useEffect(() => {
    const savedProfile = localStorage.getItem('seletor_profile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    } else {
      // Default mock data
      setProfile({
        name: userType === 'producer' ? 'Produtor Exemplo' : 'Afiliado Iniciante',
        email: 'usuario@exemplo.com',
        bio: 'Apaixonado por vendas e marketing digital.',
        pixKey: ''
      });
    }
  }, [userType]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem('seletor_profile', JSON.stringify(profile));
    addToast('Perfil atualizado com sucesso!', 'success');
  };

  return (
    <div style={{ minHeight: '100vh', padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px' }}>
        <Link href={userType === 'producer' ? '/producer' : '/affiliate'}>
          <Button variant="ghost" style={{ marginBottom: '20px' }}>&larr; Voltar para Dashboard</Button>
        </Link>
        <h1 className="hero-title" style={{ fontSize: '2.5rem' }}>Meu Perfil</h1>
      </header>

      <Card>
        <div style={{ display: 'grid', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: '#aaa' }}>Nome Completo</label>
            <input 
              type="text" 
              name="name" 
              value={profile.name} 
              onChange={handleChange}
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--card-border)', background: 'rgba(255,255,255,0.05)', color: 'white', fontSize: '1rem' }} 
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: '#aaa' }}>Email</label>
            <input 
              type="email" 
              name="email" 
              value={profile.email} 
              onChange={handleChange}
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--card-border)', background: 'rgba(255,255,255,0.05)', color: 'white', fontSize: '1rem' }} 
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: '#aaa' }}>Biografia / Sobre a Empresa</label>
            <textarea 
              name="bio" 
              value={profile.bio} 
              onChange={handleChange}
              rows={4}
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--card-border)', background: 'rgba(255,255,255,0.05)', color: 'white', fontSize: '1rem', resize: 'vertical' }} 
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: '#aaa' }}>Chave PIX (Para Recebimento/Pagamento)</label>
            <input 
              type="text" 
              name="pixKey" 
              value={profile.pixKey} 
              onChange={handleChange}
              placeholder="CPF, Email ou Aleatória"
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--card-border)', background: 'rgba(255,255,255,0.05)', color: 'white', fontSize: '1rem' }} 
            />
          </div>

          <Button variant="primary" onClick={handleSave} style={{ marginTop: '10px' }}>
            Salvar Alterações
          </Button>
        </div>
      </Card>
    </div>
  );
}
