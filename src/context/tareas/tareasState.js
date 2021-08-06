import React, { useReducer } from "react";
import tareaContext from "./tareasContext";
import TareaReducer from "./tareasReducer";
import { TAREAS_PROYECTOS, AGREGAR_TAREAS, VALIDAR_TAREA } from "../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { proyectoId: 2, nombre: "elegir color", estado: false },
      { proyectoId: 1, nombre: "elegir plataforma", estado: true },
      { proyectoId: 3, nombre: "cambiar estado", estado: true },
      { proyectoId: 2, nombre: "elegir color", estado: false },
      { proyectoId: 3, nombre: "cambiar estado", estado: true },
      { proyectoId: 1, nombre: "elegir plataforma", estado: true },
    ],
    tareasProyecto: null,
    errorTarea: false,
  };

  //crear dispatch
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  //CREAR LAS FUNCIONES
  //obtener las tareas de un proyecto en especifico
  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTOS,
      payload: proyectoId,
    });
  };

  //AGREGAR UNA TAREA AL PROYECTO SELECCIONADO
  const agregarTarea = (tarea) => {
    dispatch({
      type: AGREGAR_TAREAS,
      payload: tarea,
    });
  };

  //validar y muestra error formulario tarea
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  return (
    <tareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasProyecto: state.tareasProyecto,
        errorTarea: state.errorTarea,
        obtenerTareas,
        agregarTarea,
        validarTarea
      }}
    >
      {props.children}
    </tareaContext.Provider>
  );
};

export default TareaState;
