export default function MainBody() {
  return (
    <main className="flex flex-col items-center gap-6">
      <img src="/profile.jpg" className="rounded-full w-36 h-36 object-cover" />
      <p className="text-center max-w-md">
        Hi, I'm Andreas Drandakis. I'm passionate about [Your Interests/Profession]. Feel free to explore my site and learn more about me.
      </p>
      <div className="flex gap-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          LinkedIn
        </a>
      </div>
    </main>
  );
}
