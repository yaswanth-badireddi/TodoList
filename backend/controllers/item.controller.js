import {Todo} from '../models/Todo.model.js';

export const additem = async (req, res) => {
    console.log('Adding item:', req.body);
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ message: 'Text is required' });
    }

    const newTodo = new Todo({ text });
    await newTodo.save();

    res.status(201).json(newTodo);
  } catch (error) {
    console.error('Error adding item:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


export const getitems = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(todos);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



export const deleteitem = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Todo.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
// export const updateItem = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { text, done } = req.body;

//     const updatedTodo = await Todo.findByIdAndUpdate(
//       id,
//       { text, done },
//       { new: true, runValidators: true }
//     );

//     if (!updatedTodo) {
//       return res.status(404).json({ message: 'Item not found' });
//     }

//     res.status(200).json(updatedTodo);
//   } catch (error) {
//     console.error('Error updating item:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };
