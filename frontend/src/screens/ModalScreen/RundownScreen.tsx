import { Text } from 'native-base';
import React from 'react';
import { useQuery } from 'react-query';
import { styles } from '../../../style';
import { config } from '../../../app.json';
import TopBar from '../../components/TopBar';
import { ErrorMsg } from '../../components/ErrorMsg';
import { LoadingMsg } from '../../components/LoadingsMsg';

export default function RundownScreen() {

  const { isLoading, error, data } = useQuery('userData', async () => {
    const postData = (
      await fetch(`${config.BACKEND_URL}/api/guest/list`)
    ).json();

    return postData;
  });

  if (isLoading) return <LoadingMsg />;

  if (error) return <ErrorMsg />;

  return (
    <TopBar pageName="當日流程" show="true" navigate="AddTodoItem">
      <Text style={styles.baseText}>當日流程當日流程當日流程當日流程</Text>
    </TopBar>
  );
}
