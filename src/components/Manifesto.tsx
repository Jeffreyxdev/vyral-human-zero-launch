const Manifesto = () => {
  return (
    <section id="manifesto" className="py-20 px-4 bg-gradient-dark text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">
          THE VYRAL MANIFESTO
        </h2>
        
        <div className="space-y-8 text-lg md:text-xl leading-relaxed">
          <p className="animate-fade-in">
            We believe in a future where technology amplifies human potential, 
            not replaces it. In the Web3 revolution, authenticity cuts through 
            the noise like a blade through silk.
          </p>
          
          <p className="animate-slide-up opacity-90">
            Traditional marketing is dead. Community is everything. 
            We don't just promote projects—we birth movements, 
            forge tribes, and ignite revolutions that span the digital cosmos.
          </p>
          
          <p className="animate-fade-in opacity-90">
            Human Zero isn't about eliminating humanity—it's about 
            transcending limitations. We merge human creativity with 
            machine precision to create something unprecedented.
          </p>
          
          <div className="pt-8">
            <blockquote className="text-2xl md:text-3xl font-bold italic text-primary">
              "The future belongs to those who understand that connection 
              is currency, community is kingdom, and virality is victory."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;