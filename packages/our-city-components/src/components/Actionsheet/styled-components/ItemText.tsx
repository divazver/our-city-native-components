import { Text } from '../../Text';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    mx: '$2',
    props: {
      size: 'md',
    },
    color: '$textLight800',
    _dark: {
      color: '$textDark100',
    },
  },
  {
    componentName: 'ActionsheetItemText',
    ancestorStyle: ['_text'],
  } as const
);
