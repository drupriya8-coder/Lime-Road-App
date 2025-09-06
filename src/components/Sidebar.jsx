export default function Sidebar() {
  return (
    <aside className="w-40 bg-gray-100 min-h-screen p-4">
      <ul className="space-y-2">
        <li><a href="/" className="block p-2 hover:bg-gray-200 rounded">Home</a></li>
        <li><a href="/events" className="block p-2 hover:bg-gray-200 rounded">Events</a></li>
        <li><a href="/orders" className="block p-2 hover:bg-gray-200 rounded">Orders</a></li>
        <li><a href="/settings" className="block p-2 hover:bg-gray-200 rounded">Settings</a></li>
      </ul>
    </aside>
  );
}
