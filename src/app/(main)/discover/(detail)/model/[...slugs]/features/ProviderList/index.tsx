'use client';

import { ModelIcon } from '@lobehub/icons';
import { Divider } from 'antd';
import { useTheme } from 'antd-style';
import { BrainCircuit } from 'lucide-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { DiscoverProviderItem } from '@/types/discover';

import HighlightBlock from '../../../../features/HighlightBlock';
import ProviderItem from './ProviderItem';

interface ProviderListProps {
  data: DiscoverProviderItem[];
  identifier: string;
}

const ProviderList = memo<ProviderListProps>(({ data, identifier }) => {
  const { t } = useTranslation('discover');
  const theme = useTheme();

  if (data?.length === 0) return null;

  return (
    <HighlightBlock
      avatar={<ModelIcon model={identifier} size={300} type={'avatar'} />}
      icon={BrainCircuit}
      justify={'space-between'}
      style={{ background: theme.colorBgContainer }}
      title={t('models.supportedProviders')}
    >
      {data.map((item, index) => (
        <>
          <ProviderItem key={item.identifier} modelId={identifier} {...item} />
          {index < data.length - 1 && <Divider key={index} style={{ margin: 0 }} />}
        </>
      ))}
    </HighlightBlock>
  );
});

export default ProviderList;