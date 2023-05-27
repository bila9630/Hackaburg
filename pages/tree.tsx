import { Button } from '@mantine/core';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react'
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
    { id: '1', position: { x: 100, y: 100 }, data: { label: 'Your washmachine is broken?' } },
    { id: '2', position: { x: 100, y: 200 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];


const Tree = () => {
    const router = useRouter()
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    return (
        <div style={{ width: '100vw', height: '90vh' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
            >
                <Controls />
                <MiniMap />
                <Background gap={12} size={1} />
                <Panel position="bottom-center" style={{ marginBottom: "2rem" }}>
                    {/* <Button onClick={addNode}>Add node</Button> */}
                    <Button onClick={() => router.push("/listing")}>
                        Add a posting
                    </Button>
                </Panel>
            </ReactFlow>
        </div>
    )
}

export default Tree