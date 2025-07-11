// Archivo: quizzes.js
// Contiene la base de datos COMPLETA de todas las preguntas.

const quizData = {
    '1.1': {
        title: 'Quiz 1.1: Introducción',
        questions: [
            {
                question: 'Según la introducción, ¿cuál es la concepción final que se destaca para el capital humano en su evolución?',
                options: ['Son meros engranajes dentro de la empresa', 'Son un recurso más que debe ser obtenido al mínimo coste', 'Deben ser considerados un recurso único e importante', 'Se ocupan solo de la administración de personal'],
                correct: 2
            },
            {
                question: 'Si una empresa ve a sus trabajadores como "meros engranajes", ¿qué enfoque moderno de gestión de RRHH estaría desaprovechando?',
                options: ['La optimización de costos laborales', 'La valoración del capital humano como activo estratégico', 'El desarrollo de manuales de procedimiento', 'La externalización de todas las funciones'],
                correct: 1
            },
            {
                question: 'El primer capítulo tiene un carácter introductorio. ¿Qué aspecto fundamental se analizará para establecer una base para los temas siguientes?',
                options: ['Exclusivamente la problemática de la endogamia', 'El concepto, evolución histórica y papel estratégico de RRHH', 'Los desafíos de la planificación de RRHH sin contexto', 'La administración de salarios y beneficios de forma aislada'],
                correct: 1
            },
            {
                question: '¿Qué tipo de gestión se deriva de la concepción del capital humano como un recurso único e importante?',
                options: ['Una gestión enfocada en la estandarización', 'Una gestión que busca el mínimo coste y máxima explotación', 'Una gestión que valora y desarrolla el potencial del capital humano', 'Una gestión que percibe a los trabajadores como elementos reemplazables'],
                correct: 2
            },
            {
                question: 'La afirmación "tendremos una visión general de los RRHH, y una base para poder entender los temas que le siguen" implica que el capítulo 1 es:',
                options: ['Opcional, ya que los temas son independientes', 'Crucial para establecer los fundamentos conceptuales de la Dirección de RRHH', 'Solo relevante para gestores con experiencia', 'Principalmente útil para la elaboración de estadísticas de personal'],
                correct: 1
            }
        ]
    },
    '1.2': {
        title: 'Quiz 1.2: Definiciones y Terminología',
        questions: [
            {
                question: 'Según Jucius (1963), ¿cuál es el objetivo final de las funciones operativas de la dirección de personas?',
                options: ['Minimizar el desarrollo del equipo humano', 'Conseguir desarrollar, mantener y utilizar el equipo humano de trabajo', 'Controlar exclusivamente la asistencia y puntualidad', 'Fomentar la competencia individual sin cooperación'],
                correct: 1
            },
            {
                question: 'Fowler (1975) amplió el enfoque de los RRHH a la parte de la gestión dedicada a las personas. ¿Qué aspectos específicos de las relaciones son de su incumbencia?',
                options: ['Únicamente las relaciones jerárquicas', 'Las relaciones entre persona-trabajo, persona-persona y empleado-empresario', 'Solo las relaciones con clientes externos', 'Las relaciones con la tecnología, excluyendo las interpersonales'],
                correct: 1
            },
            {
                question: '¿Qué objetivo concreto tiene la gestión de RRHH según Price (2007)?',
                options: ['Reclutar personas competentes, flexibles y comprometidas, y desarrollar sus competencias', 'Reducir la fuerza laboral al mínimo para maximizar beneficios', 'Controlar exclusivamente la productividad individual', 'Aislar el departamento de RRHH de la estrategia general'],
                correct: 0
            },
            {
                question: '¿Qué terminología se asocia con el Modelo Michigan y una visión de los RRHH como recursos?',
                options: ['Gestión de personal', 'Gestión estratégica', 'Gestión de personas', 'Gestión administrativa'],
                correct: 1
            },
            {
                question: 'Comparando las definiciones de Jucius y Price, ¿qué evolución del concepto de RRHH se puede inferir?',
                options: ['De un enfoque en el control operacional a una filosofía integral que valora el talento', 'De la importancia del bienestar a un enfoque puramente económico', 'De la gestión de equipos a la exclusión de las relaciones interpersonales', 'De la estandarización de procesos a la improvisación en la gestión'],
                correct: 0
            }
        ]
    },
    '1.3': {
        title: 'Quiz 1.3: Enfoques y Modelos',
        questions: [
            {
                question: '¿Cuál es la característica distintiva de la visión "soft" de los RRHH?',
                options: ['Se enfoca en la racionalidad del ajuste estratégico', 'Prioriza los bajos salarios y la escasa formación', 'Pone el acento en el individuo, el compromiso y la confianza', 'Se caracteriza por una marcada supervisión y control de resultados'],
                correct: 2
            },
            {
                question: 'El Modelo Michigan, con su enfoque "hard", considera que los RRHH deben ser...',
                options: ['Un recurso único y el más importante', 'Obtenidos al menor coste y explotados al máximo', 'Un factor clave para el bienestar individual del empleado', 'Gestionados de forma descentralizada por todos los niveles'],
                correct: 1
            },
            {
                question: 'Según el Modelo de Guest, la integración de selección, formación, evaluación y recompensas conduce a un incremento en...',
                options: ['Los bajos beneficios de las inversiones', 'El compromiso, la calidad y la flexibilidad de los empleados', 'Una mayor burocracia y menor flexibilidad organizacional', 'Una disminución en la productividad de los empleados'],
                correct: 1
            },
            {
                question: '¿Qué modelo propone explícitamente analizar parámetros internos, personales y externos para lograr un mejor desempeño organizacional?',
                options: ['Modelo Harvard', 'Modelo Michigan', 'Modelo de Guest', 'Modelo de Elección'],
                correct: 3
            },
            {
                question: 'En el Modelo Harvard, la descentralización de la gestión de personas implica que...',
                options: ['La función de RRHH se centraliza en un único departamento.', 'Los RRHH están en manos de todos los que gestionan personas, no solo del jefe de RRHH.', 'Se elimina el rol del director de RRHH.', 'Se excluyen los mandos intermedios en la gestión de equipos.'],
                correct: 1
            }
        ]
    },
    '1.4-1.6': {
        title: 'Quiz 1.4-1.6: Niveles, Depto. y Dir. Estratégica',
        questions: [
            {
                question: '¿Qué nivel de análisis en la gestión de personal se encarga de diseñar las políticas necesarias como contratación o formación?',
                options: ['Nivel estratégico', 'Nivel operativo', 'Nivel político', 'Nivel funcional'],
                correct: 2
            },
            {
                question: 'Si una empresa adapta sus prácticas de RRHH a las nuevas tecnologías y a cambios en las actitudes sociales, ¿a qué contexto está respondiendo?',
                options: ['Al contexto político exclusivamente', 'Al contexto organizacional interno', 'Al contexto económico y tecnológico externo', 'A ambos contextos: organizacional interno y externo'],
                correct: 3
            },
            {
                question: 'La teoría de recursos y capacidades es un antecedente clave de la dirección estratégica de RRHH porque...',
                options: ['considera al elemento humano como un coste a minimizar.', 'propone que todas las estrategias deben ser planificadas y no emergentes.', 'postula que los RRHH pueden ser una fuente de ventaja competitiva si son valiosos, escasos e inimitables.', 'sugiere que los RRHH son fácilmente sustituibles en el mercado.'],
                correct: 2
            },
            {
                question: 'El "Ajuste Vertical o alineación" en la Dirección Estratégica de RRHH se refiere a la consistencia...',
                options: ['entre las diferentes políticas de RRHH.', 'con la cultura social del entorno.', 'con la postura estratégica y los objetivos de la organización.', 'con el nivel tecnológico de la población activa.'],
                correct: 2
            },
            {
                question: 'La función de RRHH que engloba actividades de análisis y valoración de puestos de trabajo se denomina:',
                options: ['Función estratégica', 'Función de vinculación', 'Función de desarrollo', 'Función analítica'],
                correct: 3
            }
        ]
    },
    '2.1-2.6': {
        title: 'Quiz Cap. 2: Diseño y Análisis de Puestos',
        questions: [
            {
                question: 'El producto principal del análisis de puestos, que resume el puesto como una unidad organizacional identificable, se denomina:',
                options: ['Análisis del puesto de trabajo', 'Descripción del puesto de trabajo', 'Especificación del puesto de trabajo', 'Tarea'],
                correct: 1
            },
            {
                question: '¿Para qué resulta útil la información del ADPT en el área de "Formación"?',
                options: ['Reduce la necesidad de formación.', 'Facilita el establecimiento de conocimientos, habilidades y aptitudes necesarias para el correcto desempeño.', 'Se enfoca únicamente en la capacitación externa.', 'Permite la improvisación de planes formativos.'],
                correct: 1
            },
            {
                question: '¿Qué método de recogida de datos para el ADPT es el más económico y usado, aunque puede tener problemas de subjetividad?',
                options: ['Observación directa', 'Entrevista', 'Reunión de expertos', 'Cuestionarios'],
                correct: 3
            },
            {
                question: 'La Gestión por Competencias define el puesto en función de:',
                options: ['las características subyacentes que deben poseer las personas.', 'los comportamientos observables de las personas que realizan el trabajo de manera eficaz.', 'la cantidad de tareas a realizar.', 'la estructura formal de la organización.'],
                correct: 1
            },
            {
                question: 'Las competencias que permiten diferenciar a los trabajadores según su grado de actuación (ej: desempeño superior vs. promedio) se conocen como:',
                options: ['Competencias umbral o esenciales', 'Competencias técnicas', 'Competencias de estilo (Preferir)', 'Competencias diferenciadoras'],
                correct: 3
            }
        ]
    },
    '3.1-3.6': {
        title: 'Quiz Cap. 3: Planificación de RRHH',
        questions: [
            {
                question: 'En la planificación de RRHH, ¿a qué pregunta responde la dimensión CUALITATIVA?',
                options: ['¿Cuánta gente necesitamos?', '¿Cuándo la necesitamos?', '¿Qué tipo de gente necesitamos?', '¿Por qué la necesitamos?'],
                correct: 2
            },
            {
                question: 'En el proceso de planificación de Puchol (2007), ¿en qué fase se aplican herramientas como la proyección de tendencias?',
                options: ['FASE 1: Establecimiento del escenario futuro', 'FASE 2: Programación', 'FASE 3: Ejecución', 'FASE 4: Control'],
                correct: 1
            },
            {
                question: 'Una planificación de RRHH a largo plazo (más de 5 años) se enfoca principalmente en:',
                options: ['aplicar análisis cuantitativos sobre la plantilla existente.', 'profundizar en los perfiles y cualificaciones para el próximo año.', 'planes más generales para detectar cambios en el entorno y resolver necesidades futuras.', 'establecer el plan de selección inmediato.'],
                correct: 2
            },
            {
                question: 'Cuando la planificación de RRHH busca "conseguir el número correcto de personas, con la cualificación necesaria, en el momento y lugares precisos", ¿qué tipo de objetivo está cumpliendo?',
                options: ['Logístico', 'Estratégico', 'Financiero', 'Operativo'],
                correct: 0
            },
            {
                question: 'La planificación que se realiza ANTES de poner en marcha una empresa se denomina:',
                options: ['Planificación cuando la empresa está en funcionamiento', 'Planificación con carácter estimativo y provisional', 'Planificación a medio plazo', 'Planificación de adaptación al cambio'],
                correct: 1
            }
        ]
    },
    '4.1-4.4': {
        title: 'Quiz Cap. 4: Reclutamiento y Selección',
        questions: [
            {
                question: '¿Cuál es una ventaja principal del Reclutamiento Externo sobre el Interno?',
                options: ['Costes económicos y de tiempo reducidos.', 'Aporta innovación y cambio a la empresa.', 'El candidato ya tiene conocimiento de la cultura.', 'Motivación para el empleado actual.'],
                correct: 1
            },
            {
                question: 'En el proceso de selección de personal, la técnica que permite resolver un conjunto de problemas en un tiempo determinado se llama:',
                options: ['Prueba psicotécnica de personalidad', 'Prueba basada en información biográfica', 'Simulador de vuelo', 'Técnica in-basket'],
                correct: 3
            },
            {
                question: '¿Cuál es la diferencia fundamental entre el "proceso de acogida" y el "proceso de integración"?',
                options: ['El de acogida es informal, el de integración es formal.', 'El de acogida se centra en la información inicial y el de integración en la adaptación cultural.', 'El de acogida es para todos y el de integración solo para directivos.', 'El de acogida es opcional, el de integración es obligatorio.'],
                correct: 1
            },
            {
                question: 'En el proceso de la entrevista de selección, la fase donde se abordan temas de menor implicación personal para luego profundizar en datos más sensibles es la:',
                options: ['Fase preparatoria', 'Fase inicial', 'Fase de desarrollo', 'Fase de cierre'],
                correct: 2
            },
            {
                question: 'Un inconveniente común del Reclutamiento en Red (E-recruitment) para la organización es:',
                options: ['Dificultad para llegar a muchos candidatos', 'El alto costo de los anuncios online', 'La sobreabundancia de solicitudes de empleo poco adecuadas al puesto', 'La falta de privacidad para los solicitantes'],
                correct: 2
            }
        ]
    },
    '5.1-5.9': {
        title: 'Quiz Cap. 5: Evaluación del Desempeño',
        questions: [
            {
                question: 'El "Efecto Halo" en la evaluación del desempeño se produce cuando el evaluador...',
                options: ['se ve afectado por acciones más recientes del empleado.', 'evita calificaciones muy altas o muy bajas, distorsionando las evaluaciones.', 'califica al empleado predispuesto, basado en simpatía o antipatía, antes de observar su desempeño.', 'piensa que sus propias prácticas y creencias son las mejores.'],
                correct: 2
            },
            {
                question: 'Cuando se evalúa el grado de consecución de objetivos de un empleado, ¿qué enfoque de evaluación se está utilizando?',
                options: ['Enfoque a la persona', 'Enfoque a la idiosincrasia', 'Enfoque a los resultados', 'Enfoque a los rasgos'],
                correct: 2
            },
            {
                question: '¿Cuál de los siguientes es un beneficio de la evaluación del desempeño para el JEFE?',
                options: ['Facilitar la identificación de capital humano en la organización.', 'Saber cuáles son los comportamientos valorados por la empresa.', 'Evaluar el desempeño y comportamiento de los subordinados para tomar medidas de mejora.', 'La toma de decisiones sobre salarios generales.'],
                correct: 2
            },
            {
                question: 'La evaluación "multi-feedback" o 360 grados implica que en el proceso de evaluación participan:',
                options: ['Únicamente el superior inmediato.', 'El empleado y el departamento de RRHH.', 'El superior inmediato, el propio empleado, compañeros y subordinados.', 'Únicamente clientes externos.'],
                correct: 2
            },
            {
                question: 'En el proceso de implementación de una evaluación por competencias, la elaboración de un listado de competencias inherentes a la compañía se realiza en la fase de:',
                options: ['Diseño de la evaluación', 'Análisis de sistemas posibles', 'Comunicación', 'Confección del diccionario de competencias'],
                correct: 3
            }
        ]
    },
    '6.1-6.9': {
        title: 'Quiz Cap. 6: Política Retributiva',
        questions: [
            {
                question: '¿Qué teoría salarial interpreta el salario como una mercancía sujeta a las leyes de oferta y demanda?',
                options: ['Teoría de los ingresos de Adam Smith', 'Teoría del salario de subsistencia de David Ricardo', 'Teoría de los salarios altos de Henry Ford', 'Teoría Marxista del salario'],
                correct: 1
            },
            {
                question: 'Un plan de pensiones ofrecido por la empresa es un ejemplo de:',
                options: ['Retribución directa fija', 'Retribución directa variable', 'Retribución indirecta', 'Incentivo'],
                correct: 2
            },
            {
                question: 'El principio de "Competitividad Externa" en un sistema de compensación se refiere a:',
                options: ['lograr una percepción de justicia salarial dentro de la misma empresa.', 'el nivel retributivo de la organización en relación con otras empresas del sector.', 'reflejar los distintos niveles de rendimiento y competencias de las personas.', 'relacionar la retribución con los valores corporativos.'],
                correct: 1
            },
            {
                question: 'La teoría de la motivación que postula que un individuo compara sus aportaciones y resultados con los de otros para eliminar desigualdades es la:',
                options: ['Teoría de la jerarquía de las necesidades de Maslow', 'Teoría del establecimiento de metas de Locke', 'Teoría de la equidad de Adams', 'Teoría de las expectativas de Vroom'],
                correct: 2
            },
            {
                question: 'Un programa de pago que basa una parte del salario en el desempeño individual u organizacional se denomina:',
                options: ['Pago a destajo', 'Programa de pago variable', 'Pago con base en el mérito', 'Plan de reparto de utilidades'],
                correct: 1
            }
        ]
    }
};