import * as React from 'react';
import { withApolloWithSubscriptions } from 'lib/withApollo';
import App from 'components/App';
import { useTranslation } from 'react-i18next';


function TestPage() {
    const { t } = useTranslation();
    const data = { something: "Hi!"};

    return (
        <App title={t('Тестовая страница PDF')} description={t('Здесь я буду помещать тестируемые элементы PDF')} requiresUser>
            <h1>Тестовая</h1>

        </App>
    )
}

export default withApolloWithSubscriptions(TestPage);


{/* 
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
            </Flex> */}
            {/* <PageWithSidebar
                sidebar={<Box>This is a sidebar</Box>}
                sidebarPlacement="right"
            >
                Hello world
            </PageWithSidebar> */}


            {/* <InputField label="Username" marginBottom="12px" variant="underline" />
                                <InputField label="email" marginBottom="12px" variant="underline" />
                                <InputField label="parent_id" marginBottom="12px" variant="underline" /> */}
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