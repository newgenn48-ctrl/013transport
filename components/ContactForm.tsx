'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoon: '',
    bericht: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ naam: '', email: '', telefoon: '', bericht: '' });
      } else {
        const data = await response.json();
        setErrorMessage(data.error || 'Er ging iets mis');
        setStatus('error');
      }
    } catch {
      setErrorMessage('Kon geen verbinding maken met de server');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Bericht verzonden!</h3>
        <p className="text-green-700 mb-4">We hebben je een bevestigingsmail gestuurd.</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-green-600 font-semibold hover:underline"
        >
          Nog een bericht sturen
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700">
          {errorMessage}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Naam *</label>
        <input
          type="text"
          required
          value={formData.naam}
          onChange={(e) => setFormData({...formData, naam: e.target.value})}
          placeholder="Jouw naam"
          disabled={status === 'loading'}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          placeholder="jouw@email.nl"
          disabled={status === 'loading'}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Telefoon</label>
        <input
          type="tel"
          value={formData.telefoon}
          onChange={(e) => setFormData({...formData, telefoon: e.target.value})}
          placeholder="06 12 34 56 78"
          disabled={status === 'loading'}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Bericht *</label>
        <textarea
          required
          rows={5}
          value={formData.bericht}
          onChange={(e) => setFormData({...formData, bericht: e.target.value})}
          placeholder="Waar kunnen we je mee helpen?"
          className="resize-none"
          disabled={status === 'loading'}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full text-white font-semibold py-4 rounded-xl transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        style={{ backgroundColor: '#f98b67' }}
        aria-label="Verstuur bericht"
      >
        {status === 'loading' ? (
          <>
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Verzenden...
          </>
        ) : (
          'Verstuur Bericht'
        )}
      </button>
    </form>
  );
}
