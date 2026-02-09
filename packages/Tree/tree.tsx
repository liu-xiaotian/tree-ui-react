import React, { useState } from 'react';
import { TreeProps, TreeNode } from './type';
import './styles.css'

const Tree:React.FC<TreeProps> = ({ data, onChecked }) =>{
  const [treeData, setTreeData] = useState<TreeNode[]>(data)
  const changeTreeData = (node: TreeNode, selected: boolean)=>{
    setTreeData(treeData.map((item)=>{
      if(item.id === node.id){
        item.selected = selected
      }
      return item
    }))
    onChecked && onChecked(node)
  }
  return <div>
    {
      treeData.map((item) => {
        
        return <div>
          <input type="checkbox" checked={item.selected} onChange={(e)=>{
            changeTreeData(item, e.target.checked)
          }} />
          <span>{item.name}</span>
          <div className='tree-node'>
            {
              item.children && <Tree data={item.children} onChecked={onChecked} />
            }
          </div>
        </div>
      })
    }
  </div>
}

export default Tree