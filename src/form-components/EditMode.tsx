import React, { useState } from "react";
import { Form } from "react-bootstrap";

//Props to be used in the component
interface EditingProps {
    name: string;
    setName: (newName: string) => void;
    student: boolean;
    toggleStudent: (isStudent: boolean) => void;
    editing: boolean;
    toggleEditing: (isEditing: boolean) => void;
}

//SWITCH that toggles the current editing mode
function EditSwitch({ editing, toggleEditing }: EditingProps): JSX.Element {
    function updateEditing(event: React.ChangeEvent<HTMLInputElement>) {
        toggleEditing(event.target.checked);
    }
    return (
        <Form.Check
            type="switch"
            id="toggle-edit-switch"
            label="Toggle Editing"
            checked={editing}
            onChange={updateEditing}
        />
    );
}

//CHECKBOX that picks if the user IS or IS NOT a student
function StudentCheckbox({
    student,
    editing,
    toggleStudent
}: EditingProps): JSX.Element {
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        toggleStudent(event.target.checked);
    }
    return (
        <Form.Check
            type="checkbox"
            id="toggle-student-checkbox"
            label="Student?"
            checked={student}
            onChange={updateStudent}
            disabled={!editing}
        />
    );
}

//TEXTBOX that accepts user name text input
function NameTextBox({ editing, name, setName }: EditingProps): JSX.Element {
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <Form.Group controlId="formStudentName">
            <Form.Label>Enter user name:</Form.Label>
            <Form.Control
                value={name}
                onChange={updateName}
                disabled={!editing}
            />
        </Form.Group>
    );
}

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [student, toggleStudent] = useState<boolean>(true);
    const [editing, toggleEditing] = useState<boolean>(false);
    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <EditSwitch
                    name={name}
                    editing={editing}
                    student={student}
                    setName={setName}
                    toggleEditing={toggleEditing}
                    toggleStudent={toggleStudent}
                ></EditSwitch>
                {!editing && (
                    <div>
                        {name} {student ? "is a " : "is not a"} student
                    </div>
                )}
            </div>
            <div>
                {editing && (
                    <div>
                        <NameTextBox
                            name={name}
                            editing={editing}
                            student={student}
                            setName={setName}
                            toggleEditing={toggleEditing}
                            toggleStudent={toggleStudent}
                        ></NameTextBox>
                        <StudentCheckbox
                            name={name}
                            editing={editing}
                            student={student}
                            setName={setName}
                            toggleEditing={toggleEditing}
                            toggleStudent={toggleStudent}
                        ></StudentCheckbox>
                    </div>
                )}
            </div>
        </div>
    );
}

/*The EditMode component has two states controlled by a switch: the default state shows text indiciating the user’s name and whether they are a student, and then the alternate state is an editable form for editing the user’s name and whether they are a student.

    You will need state to handle the component being in “edit mode”, the user’s name, and whether or not the user is a student.

    Initially, the component is NOT in edit mode, the user’s name is literally the string 
    Your Name (as in, that exact string, not your actual name), and the user IS a student.

    When not in edit mode, the text of the component must include Your Name is a student or Your Name is not a student.
    As another example, if the user entered their name as Charles Babbage and said they were NOT a student, 
    then the text would be Charles Babbage is not a student.
*/
