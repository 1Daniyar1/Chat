import React, { useState } from 'react';
import clsx from 'clsx';
import { Avatar, Badge, List, Menu } from 'antd';
import { UserOutlined, MessageOutlined, SettingOutlined, CalendarOutlined } from '@ant-design/icons';

const ChatMenu = () => {
  const chatData = [
    {
      id: 1,
      name: 'Тимур Валиeв Врач',
      avatar: null, 
      message: 'Добрый день, Азамат, отличный прогресс! Продолжайте в том же темпе...',
      time: '12:35',
      unread: true,
    },
    {
      id: 2,
      name: 'Ирина Александрова В...',
      avatar: null,
      message: 'Да, это упражнение требуется делать ежедневно, это рекомендация непосре...',
      time: '12.08.24',
      unread: false,
    },
    {
      id: 3,
      name: 'Поддержка Inventivo',
      avatar: null,
      message: 'Приветствуем в приложении Inventivo!',
      time: '22.08.24',
      unread: false,
    },
  ];

  const [selectedChat, setSelectedChat] = useState(null);
  const [activeTab, setActiveTab] = useState('chats'); 

  const handleSelectChat = (chatId) => {
    setSelectedChat(chatId);
  };

  const handleTabClick = (key) => {
    setActiveTab(key);
  };

  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="p-5">
        <div className="text-4xl font-bold font-inter mb-2 block">
          Чаты
        </div>
      </div>

      <div className="flex-1 w-full overflow-y-auto">
        <List
          itemLayout="horizontal"
          dataSource={chatData}
          renderItem={(chat) => (
            <List.Item
              key={chat.id}
              onClick={() => handleSelectChat(chat.id)}
              className={clsx('cursor-pointer w-full', {
                'bg-gray-200': selectedChat === chat.id,
                'bg-transparent': selectedChat !== chat.id,
              })}
              
            >
              <List.Item.Meta
                className="w-full pl-4"
                avatar={
                  <Badge dot={chat.unread} offset={[-5, 5]} color="green">
                    <Avatar
                      size={40} 
                      icon={!chat.avatar && <UserOutlined />}
                      src={chat.avatar}
                    />
                  </Badge>
                }
                title={
                  <div className="flex justify-between w-full">
                    <div className="font-semibold text-base font-inter pr-4">{chat.name}</div>
                    <div className="text-xs text-gray-500 pr-4">{chat.time}</div>
                  </div>
                }
                description={
                  <div className="text-xs text-gray-500 font-inter pr-4">{chat.message}</div>
                }
              />
            </List.Item>
          )}
        />
      </div>

      <Menu
        mode="horizontal"
        selectedKeys={[activeTab]}
        onClick={(e) => handleTabClick(e.key)}
        className="fixed bottom-0 w-full border-t border-gray-200 bg-white flex justify-around py-2"
      >
        <Menu.Item key="tasks" onClick={() => handleTabClick('tasks')}>
          <div className="flex flex-col items-center justify-center">
            <CalendarOutlined className={clsx('text-lg', {
              'text-blue-500': activeTab === 'tasks',
              'text-gray-400': activeTab !== 'tasks',
            })} />
            <div className={clsx('text-lg', 'font-medium', 'font-inter', {
              'text-blue-500': activeTab === 'tasks',
              'text-gray-400': activeTab !== 'tasks',
            })}>
              Задания
            </div>
          </div>
        </Menu.Item>
        <Menu.Item key="chats" onClick={() => handleTabClick('chats')}>
          <div className="flex flex-col items-center justify-center">
            <MessageOutlined className={clsx('text-lg', {
              'text-blue-500': activeTab === 'chats',
              'text-gray-400': activeTab !== 'chats',
            })} />
            <div className={clsx('text-lg', 'font-medium', 'font-inter', {
              'text-blue-500': activeTab === 'chats',
              'text-gray-400': activeTab !== 'chats',
            })}>
              Чаты
            </div>
          </div>
        </Menu.Item>
        <Menu.Item key="settings" onClick={() => handleTabClick('settings')}>
          <div className="flex flex-col items-center justify-center">
            <SettingOutlined className={clsx('text-lg', {
              'text-blue-500': activeTab === 'settings',
              'text-gray-400': activeTab !== 'settings',
            })} />
            <div className={clsx('text-lg', 'font-medium', 'font-inter',{
              'text-blue-500': activeTab === 'settings',
              'text-gray-400': activeTab !== 'settings',
            })}>
              Настройки
            </div>
          </div>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default ChatMenu;
