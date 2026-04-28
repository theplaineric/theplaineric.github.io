export function Footer() {
  return (
    <footer className="py-12 px-6 max-w-4xl mx-auto border-t border-accent/20 mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-foreground/60 font-serif text-sm">
        © {new Date().getFullYear()} Eric Zhu.
      </div>
      
      <div className="flex gap-6 text-sm font-sans font-medium text-foreground/70">
        <a href="mailto:theplaineric@gmail.com" className="hover:text-accent transition-colors">Email</a>
        <a href="https://github.com/theplaineric" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
        <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-accent transition-colors">Instagram</a>
      </div>
    </footer>
  );
}
