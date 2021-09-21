import * as React from 'react';
import { withApolloWithSubscriptions } from 'lib/withApollo';
import App from 'components/App';
import { useTranslation } from 'react-i18next';
import 'beautiful-react-diagrams/styles.css';
import { ActionButtons, Avatar, Box, Flex, Set } from 'bumbag';



function TestPage() {
    const { t } = useTranslation();
    return (
        <App title={t('Тестовая страница')} description={t('Здесь я буду помещать тестируемые элементы BUMBAG.STYLE')} requiresUser>

            <Flex alignX="center">
                <Box width="200px" height="100px" backgroundColor="primary" />
                <Box width="200px" height="100px" backgroundColor="secondary" />
            </Flex>
            <Flex alignX="left">
                <Box width="50px" height="50px" backgroundColor="primary" />
                <Box width="50px" height="50px" backgroundColor="secondary" />
            </Flex>
            <Flex alignX="right">
                <Box width="50px" height="50px" backgroundColor="primary" />
                <Box width="50px" height="50px" backgroundColor="secondary" />
            </Flex>
            {/* <div>
                <Set>
                    <Avatar variant="circle" src="/bean.jpg" alt="Photo of Mr. Bean" size="small" />
                    <Avatar variant="circle" src="/bean.jpg" alt="Photo of Mr. Bean" />
                    <Avatar variant="circle" src="/bean.jpg" alt="Photo of Mr. Bean" size="medium" />
                    <Avatar variant="circle" src="/bean.jpg" alt="Photo of Mr. Bean" size="large" />
                    <Avatar variant="circle" src="/bean.jpg" alt="Photo of Mr. Bean" size="150px" />
                </Set>
                <ActionButtons
                    onClickSubmit={() => console.log('submitted')}
                    onClickCancel={() => console.log('cancelled')}
                />

            </div> */}

        </App>
    )
}

export default withApolloWithSubscriptions(TestPage);