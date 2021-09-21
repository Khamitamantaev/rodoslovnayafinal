import * as React from 'react';
import { withApolloWithSubscriptions } from 'lib/withApollo';
import App from 'components/App';
import { useTranslation } from 'react-i18next';
import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';
import 'beautiful-react-diagrams/styles.css';
import { Box, Flex } from 'bumbag';



function RodoslovnayaPage() {
    const { t } = useTranslation();

    const initialSchema = createSchema({
        nodes: [
            { id: 'node-1', content: 'Node 1', coordinates: [250, 60], },
            { id: 'node-2', content: 'Node 2', coordinates: [100, 200], },
            { id: 'node-3', content: 'Node 3', coordinates: [250, 220], },
            { id: 'node-4', content: 'Node 4', coordinates: [400, 200], },
        ],
        links: [
            { input: 'node-2', output: 'node-4', label: 'сестра', readonly: true },
            { input: 'node-1', output: 'node-2', label: 'БРАТ', readonly: true },
            { input: 'node-1', output: 'node-3', label: 'ОТЕЦ', readonly: true },
            { input: 'node-1', output: 'node-4', label: 'Мама', readonly: true, className: 'my-custom-link-class' },
        ]
    });



    const [schema, { onChange }] = useSchema(initialSchema);

    return (
        <App title={t('Ваша родословная')} description={t('Здесь можно создать и распечатать свою родословную')} requiresUser>
            <Flex alignX="center">
                <Flex alignX="left">
                <Box width="400px" height="520px" >
                <div>Here will buttons for createUser</div>
                    </Box>  
                </Flex>
                <Flex alignX="right" >
                <Box width="800px" height="520px" >
                <div style={{ height: '26.5rem' }}>
                <Diagram schema={schema} onChange={onChange} />
            </div>
                    </Box>  
                    
                </Flex>
            </Flex>

            

        </App>
    )
}

export default withApolloWithSubscriptions(RodoslovnayaPage);