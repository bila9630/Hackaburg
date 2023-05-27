import { Button, Center, Group, Modal, Space, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react'
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    Panel,
} from 'reactflow';

import 'reactflow/dist/style.css';


const initialNodes = [
    { id: '1', position: { x: 700, y: 50 }, data: { label: 'Your washing machine is broken?' } },
    { id: '2', position: { x: 100, y: 150 }, data: { label: 'Drum not spinning' } },
    { id: '3', position: { x: 700, y: 150 }, data: { label: 'Leaking water' } },
    { id: '4', position: { x: 1100, y: 150 }, data: { label: 'Water not draining' } },
    { id: '5', position: { x: 0, y: 250 }, data: { label: 'There have been power outages or fluctuations recently.' } },
    { id: '6', position: { x: 170, y: 250 }, data: { label: 'The cable is intact and plugged in.' } },
    { id: '7', position: { x: 350, y: 250 }, data: { label: 'It makes strange sounds.' } },
    { id: '8', position: { x: 0, y: 400 }, data: { label: 'Check the drive belt.' } },
    { id: '9', position: { x: 200, y: 400 }, data: { label: 'Check drum bearings.' } },
    { id: '10', position: { x: 375, y: 400 }, data: { label: 'Check drum paddles or agitators.' } },
    { id: '11', position: { x: 550, y: 400 }, data: { label: 'Is the cable intact and plugged in?' } },
    { id: '12', position: { x: 500, y: 600 }, data: { label: 'Problem solved!' } },
    { id: '13', position: { x: 700, y: 600 }, data: { label: 'Problem not solved! (revert and try an other path of fixing)' } },
    { id: '14', position: { x: 600, y: 250 }, data: { label: 'Water leaking on one of the sides.' } },
    { id: '15', position: { x: 800, y: 250 }, data: { label: 'Water leaking from below.' } },
    { id: '17', position: { x: 750, y: 400 }, data: { label: 'Check for cracked or dameged tub or drum.' } },
    { id: '18', position: { x: 950, y: 400 }, data: { label: 'Check for worn out pump or pump filter.' } }
];
const initialEdges = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e1-3', source: '1', target: '3' },
    { id: 'e2-4', source: '1', target: '4' },
    { id: 'e3-5', source: '2', target: '5' },
    { id: 'e4-6', source: '2', target: '6' },
    { id: 'e4-6', source: '2', target: '7' },
    { id: 'e4-6', source: '7', target: '8' },
    { id: 'e4-6', source: '7', target: '9' },
    { id: 'e4-6', source: '7', target: '10' },
    { id: 'e4-6', source: '7', target: '11' },
    { id: 'e4-6', source: '8', target: '12' },
    { id: 'e4-6', source: '8', target: '13' },
    { id: 'e4-6', source: '9', target: '12' },
    { id: 'e4-6', source: '9', target: '13' },
    { id: 'e4-6', source: '10', target: '12' },
    { id: 'e4-6', source: '10', target: '13' },
    { id: 'e4-6', source: '11', target: '12' },
    { id: 'e4-6', source: '11', target: '13' },
    { id: 'e4-6', source: '3', target: '14' },
    { id: 'e4-6', source: '3', target: '15' },
    { id: 'e4-6', source: '14', target: '17' },
    { id: 'e4-6', source: '14', target: '18' },
    { id: 'e4-6', source: '15', target: '18' },
    { id: 'e4-6', source: '17', target: '12' },
    { id: 'e4-6', source: '17', target: '13' },
    { id: 'e4-6', source: '18', target: '12' },
    { id: 'e4-6', source: '18', target: '13' },
];


const Tree = () => {
    const router = useRouter()
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    const [opened, { open, close }] = useDisclosure(false);
    const [nodeName, setNodeName] = useState("");

    const handleAddNote = useCallback((label: any) => {
        const newNode = {
            id: (nodes.length + 1).toString(),
            position: {
                x: 0,
                y: 0,
            },
            data: { label: label },
        };
        setNodes((n) => n.concat(newNode));
    }, [setNodes, nodes]);



    return (
        <div style={{ width: '100vw', height: '85vh' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
            >
                <Controls />
                {/* <MiniMap /> */}
                <Background gap={12} size={1} />
                <Panel position="bottom-center" style={{ marginBottom: "3rem" }}>
                    <Group>
                        <Button
                            variant="gradient"
                            gradient={{ from: 'indigo', to: 'cyan' }}
                            onClick={open}
                            style={{ width: '150px' }}
                        >
                            Add node
                        </Button>
                        <Button
                            variant="gradient"
                            gradient={{ from: 'teal', to: 'lime', deg: 105 }}
                            onClick={() => router.push("/listing")}
                            style={{ width: '150px' }}
                        >
                            Add a posting
                        </Button>
                    </Group>
                </Panel>
            </ReactFlow>

            <Modal opened={opened} onClose={close} title="Add Note" centered>
                <TextInput
                    placeholder="Enter node name"
                    label="Node name"
                    value={nodeName}
                    onChange={(event) => setNodeName(event.currentTarget.value)}
                    withAsterisk
                />
                <Space h={20} />
                <Center>
                    <Button onClick={() => {
                        handleAddNote(nodeName)
                        setNodeName("")
                        close()
                    }}>Add note</Button>
                </Center>
            </Modal>

        </div>
    )
}

export default Tree