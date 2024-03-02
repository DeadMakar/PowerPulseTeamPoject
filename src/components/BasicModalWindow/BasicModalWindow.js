import { Component } from "react";
import { ModalBackdrop, ModalWindow } from "./BasicModalWindow.styled";
import { AddProductForm } from "../AddProductForm/AddProductForm";
import { AddExerciseSuccess } from "../AddExerciseSuccess/AddExerciseSuccess";
import { AddProductSuccess } from "../AddProductSuccess/AddProductSuccess";

AddExerciseForm

const BasicModalWindow = ({ children }) => {
    
    // прописать функции закрытия окна: 
    // 1. клик на бэкдроп, 
    // 2. клик на крестик закрытия, 
    // 3. клик на кнопку закрытия, 
    // 4. нажатие клавиши Esc

    return (
        <ModalBackdrop>
            <ModalWindow>
                <closeBtn/>
                {children}
                {/* умова для рендерингу: */}
                {/* <AddProductForm /> */}
                {/* <AddProductSuccess/> */}
                 <AddExerciseForm />
                {/* <AddExerciseSuccess /> */}
            </ModalWindow>

        </ModalBackdrop>
    )
}

export default BasicModalWindow
