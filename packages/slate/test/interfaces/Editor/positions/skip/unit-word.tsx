/** @jsx jsx */
import { Editor, Element } from 'slate'
import { jsx } from '../../../..'

export const input = (
  <editor>
    <block>
      one two th
      <inline>hello world</inline>
      ree four
    </block>
  </editor>
)
export const test = editor => {
  return Array.from(
    Editor.positions(editor, {
      at: [],
      unit: 'word',
      skip: node => Element.isElement(node) && Editor.isInline(editor, node),
    })
  )
}
export const output = [
  { path: [0, 0], offset: 0 },
  { path: [0, 0], offset: 3 },
  { path: [0, 0], offset: 7 },
  { path: [0, 2], offset: 3 },
  { path: [0, 2], offset: 8 },
]
