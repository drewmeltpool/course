import {useState} from 'react';

export default (initialValue) => {
  const [open, setOpen] = useState(initialValue)
  const makeToggle = () => setOpen(!open)

  return [open, makeToggle, setOpen]
}