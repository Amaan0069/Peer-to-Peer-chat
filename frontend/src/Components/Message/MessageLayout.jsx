
import { useState, useEffect } from 'react';
import { useSocket } from '../../Context/WebSocket';
import Users from './Users';
import MessageWindow from './MessageWindow';
import axios from 'axios';

export default function ChatLayout() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
//Fetching the cvonatcts here from the databse and storing them in array
// Storing in array will us to get all the contact lists from array
// When a new user gets registered, it should be avaliable for all existing users
//USeEffect will take care of that by checking that and storing the users in the array
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get('/api/users');
        setContacts(res.data || []); 
      } catch (err) {
        console.error('Error fetching contacts:', err);
        setError('Failed to load contacts');
        setContacts([
          { id: '6412f3c2f3b2c3d4e5f6a7b8', email: 'user2@example.com' },
          { id: '6412f3c2f3b2c3d4e5f6a7b9', email: 'user3@example.com' }
        ]); 
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) {
    return <div className="p-4">Loading Details...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-800">{error}</div>;
  }

  return (
    <div className="flex h-screen">
      <div className="w-1/3 border-r">
        <Users
          contacts={contacts} 
          onSelect={setSelectedContact}
          selectedContact={selectedContact}
        />
      </div>
      <div className="flex-1">
        {selectedContact ? (
          <MessageWindow contact={selectedContact} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Select a contact to start Chat
          </div>
        )}
      </div>
    </div>
  );
}
