import React, { useState } from 'react';
import { Avatar, Input, Card, Divider } from 'antd';
import { UserOutlined, SendOutlined, ArrowLeftOutlined } from '@ant-design/icons';

const ChatComponent = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [message, setMessage] = useState('');

  const messages = [
    {
      id: 1,
      text: 'Добрый день, Азамат, отличный прогресс! Продолжайте в том же темпе, на следующей неделе увидим прогресс)',
      time: '12:35',
      sender: 'Timur Валиев Врач',
    },
    {
      id: 2,
      text: 'Спасибо, Тимур. Буду выполнять задания!',
      time: '12:37',
      sender: 'user', 
    },
  ];

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!message) {
      setIsFocused(false);
    }
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto border border-gray-300 rounded-lg bg-gray-100">
      <div className="flex items-center p-2 bg-#FFFFFF border-b border-gray-300">
        <ArrowLeftOutlined className="text-blue-500 text-xl mr-2 cursor-pointer" />
        <Avatar icon={<UserOutlined />} />
        <div className="ml-2 text-lg font-medium">Тимур Валиев Врач</div>
      </div>

      <div className="flex-grow p-3 bg-gray-200 overflow-y-auto">
        <Divider plain>Сегодня</Divider>
        {messages.map((message) => (
          <Card
            key={message.id}
            className={clsx('mb-2', 'rounded-lg', 'relative', 'max-w-[70%]', {'bg-blue-100 ml-auto': message.sender === 'user', 'bg-white': message.sender !== 'user',})}
            bodyStyle={{ padding: '10px', margin: 0 }}
          >
            <p className="m-0 pr-5 text-base font-medium">{message.text}</p>
            <div className="absolute bottom-1 right-2 text-xs text-gray-500">{message.time}</div>
          </Card>
        ))}
      </div>


      <div className="flex items-center p-2 border-t border-gray-300 bg-white">
        <Input
          placeholder="Type a message"
          className={clsx('rounded-md', 'pr-10', 'transition-width', 'duration-300', {
            'w-[calc(100%-40px)]': isFocused,
            'w-full': !isFocused,
          })}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          value={message}
        />
        {isFocused || message ? (
          <SendOutlined className="ml-2 text-2xl text-blue-500 cursor-pointer" onClick={() => alert('Message sent!')} />
        ) : null}
      </div>
    </div>
  );
};

export default ChatComponent;
