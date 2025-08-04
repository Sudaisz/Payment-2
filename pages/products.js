import { useEffect } from 'react';
import { useRouter } from 'next/router';

const products = [
  { name: 'Bot Files', price: '₦700' },
  { name: 'Panel', price: '₦2500' },
  { name: 'Bot Access (rem)', price: '₦1000' },
  { name: 'Admin Panel', price: '₦5000' },
  { name: 'Telegram Account (1 Left)', price: '₦7800' },
  { name: 'Website Files', price: '₦1300' },
  { name: 'Custom Website', price: '₦2500' },
];

export default function Products() {
  const router = useRouter();

  useEffect(() => {
    const isRegistered = localStorage.getItem('registered');
    if (!isRegistered) router.push('/register');
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('registered');
    router.push('/register');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Available Products</h2>
          <button
            onClick={handleLogout}
            className="text-red-500 hover:underline"
          >
            Logout
          </button>
        </div>

        <ul className="space-y-4">
          {products.map((product, index) => (
            <li
              key={index}
              className="p-4 border rounded-lg flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.price}</p>
              </div>
              <div className="space-x-2">
                <a
                  href="https://t.me/deekingbeyond"
                  target="_blank"
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Telegram
                </a>
                <a
                  href="https://wa.me/447796179042"
                  target="_blank"
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  WhatsApp
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
              }
