export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  commission: string;
  image: string;
  hot?: boolean;
  category: string;
}

const PRODUCTS_MOCK: Product[] = [
  { 
    id: 1, 
    name: 'Renderização 3D Master', 
    description: 'Curso completo de V-Ray e Corona para arquitetos. Aprenda a criar imagens fotorrealistas em tempo recorde.',
    price: 'R$ 297', 
    commission: '50%',
    image: '#',
    hot: true,
    category: 'Design'
  },
  { 
    id: 2, 
    name: 'Finanças Pessoais Pro', 
    description: 'Domine seu dinheiro e invista com segurança. Planilhas e mentoria inclusas.',
    price: 'R$ 97', 
    commission: '70%',
    image: '#',
    hot: false,
    category: 'Finanças'
  },
  { 
    id: 3, 
    name: 'Inglês em 30 Dias', 
    description: 'Método revolucionário para destravar sua fala. Aulas práticas diárias.',
    price: 'R$ 997', 
    commission: '40%',
    image: '#',
    hot: true,
    category: 'Educação'
  },
];

export const productService = {
  getAll: async (): Promise<Product[]> => {
    // Simulate API delay
    return new Promise((resolve) => setTimeout(() => resolve(PRODUCTS_MOCK), 500));
  },
  
  getById: async (id: number): Promise<Product | undefined> => {
    return new Promise((resolve) => {
      const product = PRODUCTS_MOCK.find(p => p.id === id);
      setTimeout(() => resolve(product), 500);
    });
  }
};
