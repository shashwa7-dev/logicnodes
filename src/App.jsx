import { useCallback, useEffect, useMemo, useState } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
// 👇 you need to import the reactflow styles
import "reactflow/dist/style.css";
import AddNumFunc from "./AddNums";
import ChoiceNode from "./ChoiceNode";
import NFTForm from "./components/NFTForm";
import { GlobalStyles } from "./styles/global.styles";
import TextUpdaterNode from "./TextNode";

function App() {
  const nodeTypes = useMemo(
    () => ({ textUpdater: TextUpdaterNode, choiceNode: ChoiceNode }),
    []
  );
  const [welcomeMssg, setWelcomeMssg] = useState(null);
  const [showNFTForm, setShowNFTForm] = useState(false);
  const [shareProfile, setShareProfileStatus] = useState(0);
  const [viewProfile, setViewProfileStatus] = useState(0);
  const updateWelcomeMssg = (mssg) => {
    setWelcomeMssg(mssg);
  };

  const [initialNodes, setInitialNodes] = useState([
    {
      id: "1",
      data: { label: "Start" },
      position: { x: 100, y: 0 },
      type: "input",
    },
    {
      id: "2",
      type: "textUpdater",
      position: { x: 100, y: 100 },
      data: {
        value: welcomeMssg,
        nodeName: "S1. Your welcome mssg?",
        recordVal: updateWelcomeMssg,
      },
    },
    {
      id: "3",
      data: { label: "S2. Click to Setup Mint Config." },
      position: { x: 100, y: 200 },
      type: "default",
    },
    {
      id: "4",
      data: {
        value: viewProfile,
        choiceLabel: "S3. Users can view profile?",
        recordVal: setViewProfileStatus,
      },
      position: { x: 100, y: 300 },
      type: "choiceNode",
    },
    {
      id: "5",
      data: {
        value: shareProfile,
        choiceLabel: "S4. Users can share profile?",
        recordVal: setShareProfileStatus,
      },
      position: { x: 100, y: 400 },
      type: "choiceNode",
    },
    {
      id: "6",
      data: { label: "End" },
      position: { x: 100, y: 500 },
      type: "output",
    },
  ]);

  const initialEdges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e2-3", source: "2", target: "3" },
    { id: "e3-4", source: "3", target: "4" },
    { id: "e4-5", source: "4", target: "5" },
    { id: "e5-6", source: "5", target: "6" },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [captureElementClick, setCaptureElementClick] = useState(false);
  const [nftData, setNFTData] = useState({});
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  const onNodeClick = (event, node) => {
    if (node.id === "3") {
      setShowNFTForm(true);
    }
  };
  // useEffect(() => {
  //   updateTotal();
  // }, [updateTotal]);

  // useEffect(() => {
  //   if (edges.filter((edg) => edg.target === "3").length === 2) {
  //     setNodes((nds) =>
  //       nds.map((node) => {
  //         if (node.id === "3") {
  //           // it's important that you create a new object here
  //           // in order to notify react flow about the change
  //           node.data = {
  //             value: total,
  //           };
  //         }

  //         return node;
  //       })
  //     );
  //   } else {
  //     setNodes((nds) =>
  //       nds.map((node) => {
  //         if (node.id === "3") {
  //           // it's important that you create a new object here
  //           // in order to notify react flow about the change
  //           node.data = {
  //             value: 0,
  //           };
  //         }

  //         return node;
  //       })
  //     );
  //   }
  // }, [setNodes, total, edges.length]);

  return (
    <>
      <GlobalStyles />
      <div>
        <h1>Mint Flow</h1>
        <div className="flowChart" style={{ height: 800 }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            onNodeClick={onNodeClick}
            fitView
          >
            <MiniMap />
            <Controls />
            <Background />
          </ReactFlow>
        </div>
        {showNFTForm ? (
          <NFTForm
            closeForm={() => setShowNFTForm(false)}
            setNFTData={setNFTData}
            nftData={nftData}
          />
        ) : null}
        <div className="user_data">
          <h3>Submitted Data</h3>
          <p>Welcome Mssg: {welcomeMssg ?? "N/A"}</p>
          <p>NFT Data: {JSON.stringify(nftData) ?? "N/A"}</p>
          <p>View Profile: {Number(viewProfile) === 1 ? "Yes" : "No"}</p>
          <p>Share Profile: {Number(shareProfile) === 1 ? "Yes" : "No"}</p>
        </div>
      </div>
    </>
  );
}
export default App;
