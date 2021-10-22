import React, { useState } from 'react'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import { Formik, Form, Field } from 'formik';

import { ActionButtons, Avatar, Box, Button, Flex, Input, Label, Paragraph, Table, Text, useToasts } from 'bumbag';
import { InputField } from 'bumbag';
interface AddMemberModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AddMemberModal: React.FC<AddMemberModalProps> = ({
    isOpen,
    onClose }) => {

    const onSubmitBranch = (values) => {
        console.log(values)
        // return createTree({
        //     variables: {
        //         input: {
        //             name: values.name,
        //         }
        //     }
        // })
    }

    return <Modal isOpen={isOpen} onClose={onClose} size="xs">
        <ModalOverlay />
        <ModalContent maxW="30rem">
            <ModalHeader>
                Добавить ветку в текущее древо
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Label marginBottom="20px">Add Branch</Label>
                <Formik
                    initialValues={{}}
                    onSubmit={onSubmitBranch}
                >
                    <Form>
                        <Field
                            component={InputField.Formik}
                            name="name"
                            label="TreeName"
                            marginBottom="10px"
                        />
                        <Field
                            component={InputField.Formik}
                            name="rootUser"
                            label="ID"
                            marginBottom="10px"
                        />
                        <Button type="submit" palette="success">Success</Button>
                    </Form>
                </Formik>
            </ModalBody>
            <ModalFooter>

            </ModalFooter>
        </ModalContent>
    </Modal>
}




