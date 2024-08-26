import { EComponentKind, T4DComponentConfig } from '@ws-ui/webform-editor';
import { Settings } from '@ws-ui/webform-editor';
import { IconFolder } from '@tabler/icons-react';
import FileManagertSettings, { BasicSettings } from './FileManager.settings';

export interface IFileItem {
  name: string;
  type: 'file' | 'folder';
  lastModified?: string;
  size?: number;
  children?: IFileItem[];
}
export interface IFileManagerProps extends webforms.ComponentProps {
  items: IFileItem[];
}

export default {
  craft: {
    displayName: 'File manager',
    sanityCheck: {
      keys: [{ name: 'datasource', require: true, isDatasource: true }],
    },
    requiredFields: {
      keys: ['datasource'],
      all: false,
    },
    kind: EComponentKind.BASIC,
    props: {
      items: [],
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(FileManagertSettings, BasicSettings),
    },
  },
  info: {
    displayName: 'File Manager',
    exposed: true,
    icon: IconFolder,
    events: [
      {
        label: 'On File Click',
        value: 'onfileclick',
      },
      {
        label: 'On Folder Click',
        value: 'onfolderclick',
      },
    ],
    datasources: {
      accept: ['array'],
    },
  },
  defaultProps: {
    items: [],
  },

} as T4DComponentConfig<IFileManagerProps>;

export interface IFileManagerProps extends webforms.ComponentProps {
  name?: string;
}