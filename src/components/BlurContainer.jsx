const BlurContainer = ({children}) => {
  return (
    <div className="relative rounded-xl before:content-[''] before:absolute before:rounded-xl before:inset-1 before:bg-[var(--primaryColor)] before:blur-none before:duration-300 lg:hover:before:shadow-2xl lg:hover:before:blur-md" data-aos="fade-left">
      {children}
    </div>
  )
}

export default BlurContainer