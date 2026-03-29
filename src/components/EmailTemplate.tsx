import * as React from 'react';

interface EmailTemplateProps {
  userName?: string;
  userEmail: string;
  category: string;
  answers: Array<{
    question: string;
    answer: string;
  }>;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  userEmail,
  category,
  answers,
}) => (
  <div style={{
    fontFamily: 'sans-serif',
    color: '#333',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #eee',
    borderRadius: '8px'
  }}>
    <h1 style={{ color: '#0055ff', fontSize: '24px', marginBottom: '20px' }}>
      Nuevo Diagnóstico de Operación Completado
    </h1>
    
    <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
      Se ha completado un diagnóstico en la landing page. Aquí están los resultados:
    </p>

    <div style={{
      backgroundColor: '#f9f9f9',
      padding: '15px',
      borderRadius: '6px',
      margin: '20px 0'
    }}>
      <p style={{ margin: '0 0 10px 0' }}><strong>Email del Usuario:</strong> {userEmail}</p>
      <p style={{ margin: '0' }}><strong>Resultado Sugerido:</strong> {category}</p>
    </div>

    <h2 style={{ fontSize: '18px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
      Respuestas Detalladas
    </h2>
    
    <ul style={{ listStyle: 'none', padding: '0' }}>
      {answers.map((item, index) => (
        <li key={index} style={{ marginBottom: '15px' }}>
          <p style={{ margin: '0', fontWeight: 'bold', color: '#666' }}>{item.question}</p>
          <p style={{ margin: '5px 0 0 0' }}>{item.answer}</p>
        </li>
      ))}
    </ul>

    <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '30px 0' }} />
    
    <p style={{ fontSize: '12px', color: '#999', textAlign: 'center' }}>
      Enviado automáticamente desde enzothome.com
    </p>
  </div>
);
