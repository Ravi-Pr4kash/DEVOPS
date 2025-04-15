export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 to-purple-400 text-white p-6">
      <h1 className="text-5xl font-bold mb-4 animate-bounce">🎉 Happy Birthday, Ravi! 🎂</h1>
      <p className="text-xl mb-6 text-center max-w-xl">
        Wishing you a day filled with love, laughter, and all your favorite things. You're amazing—celebrate like a king! 👑
      </p>
      <img
        src="https://media.giphy.com/media/l0MYC0LajbaPoEADu/giphy.gif"
        alt="Birthday Cake"
        className="rounded-2xl shadow-lg w-80"
      />
    </main>
  );
}