import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useState } from 'react';
import { IFileManagerProps } from './FileManager.config';
import { IconFolder, IconFile } from '@tabler/icons-react';

const FileManager: FC<IFileManagerProps> = ({style, className, classNames = [] }) => {
  const { connectors: { connect } } = useEnhancedNode();
  const [currentFolder, setCurrentFolder] = useState<{ name: string, type: string, children?: { name: string, type: string }[] } | null>(null);
  
  const mockItems = [
    { name: 'Documents', type: 'folder', children: [{ name: 'File1.txt', type: 'file' }, { name: 'File2.txt', type: 'file' }] },
    { name: 'Images', type: 'folder', children: [{ name: 'Image1.png', type: 'file' }, { name: 'Image2.jpg', type: 'file' }] },
  ];

  const handleItemClick = (item: { name: string, type: string }) => {
    if (item.type === 'folder') {
      setCurrentFolder(item);
    }
  };

  return (
    <div ref={connect} style={style} className={cn('flex h-full', className, ...classNames)}>
      <div className="w-1/4 border-r border-gray-400 p-2">
        <h3 className="font-semibold text-gray-600">Navigation</h3>
        <div className="mt-2">
          {mockItems.map((item, index) => (
            <div key={index} className="flex items-center cursor-pointer hover:bg-gray-100 p-1" onClick={() => handleItemClick(item)}>
              {item.type === 'folder' ? <IconFolder className="mr-1 text-yellow-500" /> : <IconFile className="mr-1 text-gray-500" />}
              <span className="text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-3/4 p-2">
        <h3 className="font-semibold text-gray-600">Content</h3>
        <div className="mt-2">
          {currentFolder && currentFolder.children ? (
            currentFolder.children.map((child, index) => (
              <div key={index} className="flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer">
                {child.type === 'folder' ? <IconFolder className="mr-2 text-yellow-500" /> : <IconFile className="mr-2 text-gray-500" />}
                <span>{child.name}</span>
              </div>
            ))
          ) : (
            <div className="text-gray-500">Select a folder to view its contents...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileManager;
