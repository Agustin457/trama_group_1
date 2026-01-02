import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Validate required fields are filled (HTML required attribute handles basic validation)
        if (formData.name && formData.email && formData.message) {
            setTimeout(() => setStatus('success'), 1000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Header */}
            <div className="bg-neutral-900 text-white py-20 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <span className="text-luxury-gold text-xs font-bold tracking-[0.2em] mb-4 block">CONTACTO</span>
                    <h1 className="text-4xl md:text-6xl font-serif mb-6">Inicie su conversación</h1>
                    <p className="text-white/60 font-light text-lg max-w-2xl mx-auto">
                        Estamos aquí para guiarlo en su próxima inversión inmobiliaria. Contáctenos para agendar una visita privada.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

                    {/* Direct Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-serif text-luxury-black mb-8">Información Directa</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-luxury-light flex items-center justify-center rounded-full shrink-0">
                                        <Mail className="w-5 h-5 text-luxury-black" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold tracking-widest uppercase mb-1">Email</h4>
                                        <p className="text-luxury-gray font-light">info@realaires.com.ar</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-luxury-light flex items-center justify-center rounded-full shrink-0">
                                        <Phone className="w-5 h-5 text-luxury-black" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold tracking-widest uppercase mb-1">Teléfono</h4>
                                        <p className="text-luxury-gray font-light">+54 11 3383 1962</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-luxury-light flex items-center justify-center rounded-full shrink-0">
                                        <MapPin className="w-5 h-5 text-luxury-black" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold tracking-widest uppercase mb-1">Oficinas</h4>
                                        <p className="text-luxury-gray font-light">Buenos Aires: Av. Alvear 1890, Recoleta</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-luxury-light/30 p-8 md:p-12">
                        {status === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-fade-in">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <Send className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-serif text-luxury-black mb-4">¡Mensaje Enviado!</h3>
                                <p className="text-luxury-gray">Nos pondremos en contacto con usted a la brevedad.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-8 text-xs font-bold tracking-widest border-b border-luxury-black pb-1 hover:text-luxury-gold hover:border-luxury-gold transition-colors"
                                >
                                    ENVIAR OTRO MENSAJE
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-luxury-black/60">Nombre Completo *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors"
                                        placeholder="Juan Perez"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-luxury-black/60">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors"
                                        placeholder="juan@ejemplo.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-luxury-black/60">Teléfono</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors"
                                        placeholder="+54 ..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-luxury-black/60">Mensaje *</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors resize-none"
                                        placeholder="Estoy interesado en..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-luxury-black text-white py-4 text-xs font-bold tracking-[0.2em] hover:bg-luxury-gold transition-colors duration-300 flex items-center justify-center gap-2"
                                >
                                    ENVIAR MENSAJE
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
