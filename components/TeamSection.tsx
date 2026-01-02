import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { TeamMember } from '../types';

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
    return (
        <div className="flex flex-col group focus-within:ring-2 focus-within:ring-luxury-gold focus-within:ring-offset-2 outline-none rounded-sm" tabIndex={0}>
            {/* Image Container with Overlay */}
            <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 bg-gray-100">
                <img
                    src={member.image}
                    alt={`Foto de ${member.name}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-luxury-black/90 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                    <p className="text-white font-light text-sm leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {member.bio}
                    </p>
                </div>
            </div>

            {/* Visible Info */}
            <div className="text-left">
                <h3 className="text-xl font-serif text-luxury-black mb-1 group-hover:text-luxury-gold transition-colors duration-300">
                    {member.name}
                </h3>
                <p className="text-xs font-bold text-luxury-gray uppercase tracking-widest">
                    {member.role}
                </p>
            </div>
        </div>
    );
};

const TeamSection: React.FC = () => {
    return (
        <section className="bg-white py-24 border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-luxury-gold text-xs font-bold tracking-[0.2em] mb-4 block">NUESTRO EQUIPO</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-luxury-black">
                        Expertos en crear valor
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {TEAM_MEMBERS.map((member) => (
                        <TeamCard key={member.id} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
