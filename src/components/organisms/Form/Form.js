import React from 'react';
import FormNavigation from 'components/molecules/FormNavigation/FormNavigation';
import { StyledForm } from './Form.styles';
import { useForm } from 'react-hook-form';
import { addNote, editNote } from 'store/actionCreators';
import { useDispatch, useSelector } from 'react-redux';

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const currentNoteIndex = useSelector((state) => state.currentNoteIndex);
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleAddNote = ({ title, content }) => {
    if (title === '' || content === '') {
      alert('Title and content must be completed');
      return;
    }
    dispatch(addNote({ title, content }));
    reset();
  };

  const handleEditNote = ({ title, content }) => {
    if (title === '' && content === '') return;
    dispatch(editNote({ title, content }));
    reset();
  };

  return (
    <>
      <FormNavigation />
      <StyledForm
        id="form"
        onSubmit={handleSubmit(
          notes[currentNoteIndex] ? handleEditNote : handleAddNote
        )}
      >
        <input
          type="text"
          placeholder="Lorem ipsum ..."
          {...register('title')}
          defaultValue={
            notes[currentNoteIndex] ? notes[currentNoteIndex].title : ''
          }
        />
        <textarea
          placeholder="Lorem ipsum dolor sit amet ..."
          {...register('content')}
          defaultValue={
            notes[currentNoteIndex] ? notes[currentNoteIndex].content : ''
          }
        ></textarea>
      </StyledForm>
    </>
  );
};

export default Form;
