import config, { IFileManagerProps } from './FileManager.config';
import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './FileManager.build';
import Render from './FileManager.render';

const FileManager: T4DComponent<IFileManagerProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <Build {...props} /> : <Render {...props} />;
};

FileManager.craft = config.craft;
FileManager.info = config.info;
FileManager.defaultProps = config.defaultProps;

export default FileManager;