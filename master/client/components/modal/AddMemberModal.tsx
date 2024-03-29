import React, { useState } from 'react'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import { Formik, Form, Field } from 'formik';

import { ActionButtons, Avatar, Box, Button, Flex, Input, Label, Paragraph, Table, Text, useToasts } from 'bumbag';
import { InputField } from 'bumbag';
import { useCreateBranchMutation, useRemoveBranchByIdMutation } from 'generated';
interface AddMemberModalProps {
    isOpen: boolean;
    onClose: () => void;
    currentBranch: {
        _id: string,
        name: string,
        treeID: string,
        rootUser: string,
        parentID: string
    }
    currentTree: string;
}

export const AddMemberModal: React.FC<AddMemberModalProps> = ({
    isOpen,
    onClose,
currentBranch,
currentTree }) => {
    const toasts = useToasts();
    const [createBranch, { loading: branchaddloading, error }] = useCreateBranchMutation({
        onCompleted: () => {
            toasts.success({
                title: '',
                message: 'Ветка успешно добавлено',
            });
        },
    });

    const [deleteBranch, { loading: branchdeleteloading, error: branchdeleteerror }] = useRemoveBranchByIdMutation({
        onCompleted: () => {
            toasts.success({
                title: '',
                message: 'Ветка успешно добавлено',
            });
        },
    });

    const onSubmitDeleteBranch = (id) => {
        return deleteBranch({
            variables: {
               input: id
            }
        })
    }

    const onSubmitBranch = (values) => {
        console.log(values)
        return createBranch({
            variables: {
                input: {
                    name: values.name,
                    treeID: currentTree,
                    rootUser: currentBranch.rootUser,
                    parentID: currentBranch._id
                }
            }
        })
    }



    return <Modal isOpen={isOpen} onClose={onClose} size="xs">
        <ModalOverlay />
        <ModalContent maxW="30rem">
            <ModalHeader>
                Добавить ветку в текущее древо
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                {/* <Label marginBottom="20px">Add Branch</Label> */}
                <Formik
                    initialValues={{}}
                    onSubmit={onSubmitBranch}
                >
                    <Form>
                        <Field
                            component={InputField.Formik}
                            name="name"
                            label="BranchName"
                            marginBottom="10px"
                        />
                        <Button type="submit" palette="success">Success</Button>
                    </Form>
                </Formik>
            </ModalBody>
            <ModalFooter style={{ alignItems: "center"}}>
            <Text.Block>Удалить текущую ветку?</Text.Block>
            <Button palette="danger" onClick={() => onSubmitDeleteBranch(currentBranch._id)}>Удалить</Button>              
            </ModalFooter>  
        </ModalContent>
    </Modal>
}




