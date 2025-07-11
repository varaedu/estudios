// Archivo: script.js (Versión con Búsqueda Global)

document.addEventListener('DOMContentLoaded', () => {

    // --- REFERENCIAS AL DOM ---
    const globalSearchInput = document.getElementById('global-search-input');
    const globalSearchResults = document.getElementById('global-search-results');
    const contentNav = document.getElementById('content-nav');
    const quizNav = document.getElementById('quiz-nav');
    // ... el resto de las referencias se mantienen
    const allViews = document.querySelectorAll('.view');
    const contentTitle = document.getElementById('content-title');
    const contentBody = document.getElementById('content-body');
    const markCompletedCheckbox = document.getElementById('mark-completed');
    const personalNotesTextarea = document.getElementById('personal-notes');
    const searchInput = document.getElementById('search-input');
    const quizTitle = document.getElementById('quiz-title');
    const questionCounter = document.getElementById('question-counter');
    const timerDisplay = document.getElementById('timer');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const nextQuestionBtn = document.getElementById('next-question-btn');
    const finalScoreDisplay = document.getElementById('final-score');
    const correctCountDisplay = document.getElementById('correct-count');
    const incorrectCountDisplay = document.getElementById('incorrect-count');
    const failedQuestionsList = document.getElementById('failed-questions-list');
    const retryFailedBtn = document.getElementById('retry-failed-btn');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');
    const themeToggle = document.getElementById('theme-toggle');


    // --- ESTADO DE LA APLICACIÓN (SIN CAMBIOS) ---
    let state = {
        currentItemId: null,
        currentQuizId: null,
        quiz: { questions: [], currentQuestionIndex: 0, score: 0, userAnswers: [], timerInterval: null },
        userProgress: { completedTopics: [], notes: {}, quizScores: {} }
    };
    
    // --- LÓGICA DE BÚSQUEDA GLOBAL ---

    function handleGlobalSearch(event) {
        const query = event.target.value.trim().toLowerCase();
        globalSearchResults.innerHTML = '';

        if (query.length < 3) {
            return;
        }

        const regex = new RegExp(query, 'gi');
        const foundItems = [];

        Object.keys(window.theoreticalContent).forEach(id => {
            const item = window.theoreticalContent[id];
            
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = item.content;
            const plainText = tempDiv.textContent || tempDiv.innerText || "";
            
            if (item.title.toLowerCase().includes(query) || plainText.toLowerCase().includes(query)) {
                
                let snippet = '';
                const matchIndex = plainText.toLowerCase().indexOf(query);

                if (matchIndex !== -1) {
                    const startIndex = Math.max(0, matchIndex - 40);
                    const endIndex = Math.min(plainText.length, matchIndex + query.length + 80);
                    snippet = plainText.substring(startIndex, endIndex);
                    snippet = snippet.replace(regex, `<mark>${query}</mark>`);
                    if(startIndex > 0) snippet = '...' + snippet;
                    if(endIndex < plainText.length) snippet += '...';
                } else {
                    // Si el término solo está en el título, tomamos el inicio del contenido
                    snippet = plainText.substring(0, 120) + '...';
                }

                foundItems.push({
                    id,
                    title: item.title,
                    snippet
                });
            }
        });
        
        renderGlobalResults(foundItems, query);
    }

    function renderGlobalResults(items, query) {
        if (items.length === 0) {
            globalSearchResults.innerHTML = '<li class="no-results">No se encontraron resultados.</li>';
            return;
        }

        items.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="result-title">${item.title}</span>
                <span class="result-snippet">${item.snippet}</span>
            `;
            li.addEventListener('click', () => {
                displayContent(item.id);
                // Retrasar ligeramente la búsqueda local para que el DOM se actualice
                setTimeout(() => {
                    const localSearch = document.getElementById('search-input');
                    localSearch.value = query;
                    localSearch.dispatchEvent(new Event('input')); // Disparar el evento de búsqueda local
                }, 100);
                 globalSearchInput.value = ''; // Limpiar búsqueda global
                 globalSearchResults.innerHTML = '';
            });
            globalSearchResults.appendChild(li);
        });
    }

    // --- El resto de funciones se mantiene, pero actualizamos la de los event listeners ---
    
    function setupEventListeners() {
        // --- NUEVO LISTENER PARA BÚSQUEDA GLOBAL ---
        globalSearchInput.addEventListener('input', handleGlobalSearch);

        // ... El resto de los listeners se mantienen ...
        document.getElementById('navigation-menu').addEventListener('click', e => {
            if (e.target.tagName !== 'A' || !e.target.dataset.type) return;
            e.preventDefault();

            const type = e.target.dataset.type;
            const id = e.target.dataset.id;
            
            window.location.hash = `${type}${id ? '-' + id : ''}`;

            switch (type) {
                case 'content': displayContent(id); break;
                case 'quiz': startQuiz(id); break;
                case 'stats': displayStats(); break;
                case 'random-quiz': startRandomQuiz(); break;
            }
        });
        
        markCompletedCheckbox.addEventListener('change', () => {
            if (!state.currentItemId) return;
            const { completedTopics } = state.userProgress;
            const index = completedTopics.indexOf(state.currentItemId);

            if (markCompletedCheckbox.checked && index === -1) {
                completedTopics.push(state.currentItemId);
            } else if (!markCompletedCheckbox.checked && index > -1) {
                completedTopics.splice(index, 1);
            }
            saveProgress();
        });

        personalNotesTextarea.addEventListener('input', () => {
            if (state.currentItemId) {
                state.userProgress.notes[state.currentItemId] = personalNotesTextarea.value;
                saveProgress();
            }
        });
        
        nextQuestionBtn.addEventListener('click', handleNextQuestion);
        retryFailedBtn.addEventListener('click', retryFailedQuestions);
        restartQuizBtn.addEventListener('click', () => {
            if (state.currentQuizId) startQuiz(state.currentQuizId);
        });
        themeToggle.addEventListener('click', toggleTheme);
        searchInput.addEventListener('input', handleLocalSearch); // Cambiado a handleLocalSearch
    }

    // RENOMBRAMOS handleSearch a handleLocalSearch para diferenciarla
    function handleLocalSearch() {
        if (!state.currentItemId || !window.theoreticalContent[state.currentItemId]) return;

        const query = searchInput.value.trim().toLowerCase();
        contentBody.innerHTML = window.theoreticalContent[state.currentItemId].content; // Reset content
        const resultsCountEl = document.getElementById('search-results-count');
        resultsCountEl.textContent = '';

        if (query.length < 3) return;

        const regex = new RegExp(`(${query})`, 'gi');
        let matches = 0;

        function traverseAndReplace(node) {
            if (node.nodeType === 3) { 
                if (node.textContent.trim().length > 0) {
                    const newHtml = node.textContent.replace(regex, (match) => {
                        matches++;
                        return `<mark>${match}</mark>`;
                    });
                    if (newHtml !== node.textContent) {
                        const span = document.createElement('span');
                        span.innerHTML = newHtml;
                        node.parentNode.replaceChild(span, node);
                    }
                }
            } else if (node.nodeType === 1 && node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE') {
                Array.from(node.childNodes).forEach(traverseAndReplace);
            }
        }
        
        traverseAndReplace(contentBody);
        if (matches > 0) resultsCountEl.textContent = `${matches} resultados`;
    }

    // EL RESTO DEL CÓDIGO (init, handleInitialNavigation, populateNav, etc.)
    // se mantiene exactamente igual que en el último mensaje. Aquí lo pego completo para evitar dudas.
    
    function init() { loadProgress(); populateNav(); setupEventListeners(); handleInitialNavigation(); }

    function handleInitialNavigation() {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            const [type, id] = hash.split(/-(.+)/);
            if (type === 'content' && window.theoreticalContent[id]) { displayContent(id); } 
            else if (type === 'quiz' && window.quizData[id]) { startQuiz(id); } 
            else if (type === 'random' || type === 'stats') { const link = document.querySelector(`#navigation-menu a[data-type="${type}"]`); if (link) link.click(); } 
            else { switchView('welcome-view'); }
        } else { switchView('welcome-view'); }
    }

    function populateNav() {
        contentNav.innerHTML = '';
        const sortedContentKeys = Object.keys(window.theoreticalContent).sort();
        sortedContentKeys.forEach(id => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="#content-${id}" data-type="content" data-id="${id}">${window.theoreticalContent[id].title}</a>`;
            contentNav.appendChild(li);
        });

        quizNav.innerHTML = '';
        const sortedQuizKeys = Object.keys(window.quizData).sort();
        sortedQuizKeys.forEach(id => {
            if (window.quizData[id] && window.quizData[id].questions.length > 0) {
                const li = document.createElement('li');
                li.innerHTML = `<a href="#quiz-${id}" data-type="quiz" data-id="${id}">${window.quizData[id].title}</a>`;
                quizNav.appendChild(li);
            }
        });
    }
    
    function switchView(viewId) { allViews.forEach(v => v.classList.remove('active')); const viewToShow = document.getElementById(viewId); if (viewToShow) viewToShow.classList.add('active'); }
    function displayContent(id) { state.currentItemId = id; const item = window.theoreticalContent[id]; if (!item) return; contentTitle.textContent = item.title; contentBody.innerHTML = item.content; markCompletedCheckbox.checked = state.userProgress.completedTopics.includes(id); personalNotesTextarea.value = state.userProgress.notes[id] || ''; switchView('content-view'); updateActiveNav(id, 'content'); searchInput.value = ''; handleLocalSearch(); }
    function displayStats() { switchView('stats-view'); updateActiveNav(null, 'stats'); renderProgressBars(); }

    function startQuiz(id) { state.currentQuizId = id; const quiz = window.quizData[id]; if (!quiz || quiz.questions.length === 0) { alert('No hay preguntas para este tema todavía.'); return; } state.quiz = { questions: [...quiz.questions].sort(() => Math.random() - 0.5), currentQuestionIndex: 0, score: 0, userAnswers: [], timerInterval: null, startTime: Date.now() }; quizTitle.textContent = quiz.title; switchView('quiz-view'); updateActiveNav(id, 'quiz'); displayQuestion(); startTimer(); }
    function startRandomQuiz() { let allQuestions = Object.values(window.quizData).flatMap(q => q.questions); if (allQuestions.length === 0) { alert('No hay preguntas disponibles para el modo aleatorio.'); return; } allQuestions.sort(() => Math.random() - 0.5); state.quiz = { questions: allQuestions.slice(0, 20), currentQuestionIndex: 0, score: 0, userAnswers: [], timerInterval: null, startTime: Date.now() }; state.currentQuizId = 'random'; quizTitle.textContent = "Quiz Aleatorio Global"; switchView('quiz-view'); updateActiveNav(null, 'random-quiz'); displayQuestion(); startTimer(); }

    function displayQuestion() { const { questions, currentQuestionIndex } = state.quiz; if (currentQuestionIndex >= questions.length) return; const q = questions[currentQuestionIndex]; questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`; questionText.textContent = q.question; optionsContainer.innerHTML = ''; q.options.forEach((option, index) => { const optionEl = document.createElement('div'); optionEl.className = 'option'; optionEl.dataset.index = index; optionEl.textContent = option; optionEl.addEventListener('click', () => { document.querySelectorAll('.option.selected').forEach(o => o.classList.remove('selected')); optionEl.classList.add('selected'); nextQuestionBtn.disabled = false; }); optionsContainer.appendChild(optionEl); }); nextQuestionBtn.textContent = (currentQuestionIndex === questions.length - 1) ? 'Finalizar Quiz' : 'Siguiente'; nextQuestionBtn.disabled = true; }
    function handleNextQuestion() { const selectedOption = optionsContainer.querySelector('.option.selected'); if (!selectedOption) return; const answerIndex = parseInt(selectedOption.dataset.index); const q = state.quiz.questions[state.quiz.currentQuestionIndex]; state.quiz.userAnswers.push({ question: q.question, answer: answerIndex, correct: q.correct }); if (answerIndex === q.correct) state.quiz.score++; state.quiz.currentQuestionIndex++; if (state.quiz.currentQuestionIndex < state.quiz.questions.length) { displayQuestion(); } else { showResults(); } }

    function showResults() { clearInterval(state.quiz.timerInterval); const { questions, score, userAnswers } = state.quiz; const percentage = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0; finalScoreDisplay.textContent = `${percentage}%`; correctCountDisplay.textContent = score; incorrectCountDisplay.textContent = questions.length - score; failedQuestionsList.innerHTML = ''; const failedQuestions = userAnswers.filter(a => a.answer !== a.correct); retryFailedBtn.style.display = failedQuestions.length > 0 ? 'inline-block' : 'none'; failedQuestions.forEach(failed => { const questionData = questions.find(q => q.question === failed.question); if (questionData) { const li = document.createElement('li'); li.innerHTML = ` <p><strong>Pregunta:</strong> ${failed.question}</p> <p style="color:var(--danger-color)"><em>Tu respuesta:</em> ${questionData.options[failed.answer]}</p> <p style="color:var(--success-color)"><strong>Respuesta correcta:</strong> ${questionData.options[failed.correct]}</p> `; failedQuestionsList.appendChild(li); } }); if (state.currentQuizId !== 'random' && state.currentQuizId) { state.userProgress.quizScores[state.currentQuizId] = state.userProgress.quizScores[state.currentQuizId] || []; state.userProgress.quizScores[state.currentQuizId].push(percentage); saveProgress(); } switchView('results-view'); }
    function retryFailedQuestions() { const failedQuestionTexts = state.quiz.userAnswers.filter(a => a.answer !== a.correct).map(a => a.question); const retryQuestions = state.quiz.questions.filter(q => failedQuestionTexts.includes(q.question)); state.quiz = { questions: retryQuestions, currentQuestionIndex: 0, score: 0, userAnswers: [], timerInterval: null, startTime: Date.now() }; quizTitle.textContent += " (Reintentando Falladas)"; switchView('quiz-view'); displayQuestion(); startTimer(); }

    function startTimer() { clearInterval(state.quiz.timerInterval); state.quiz.startTime = Date.now(); state.quiz.timerInterval = setInterval(() => { const elapsed = Math.floor((Date.now() - state.quiz.startTime) / 1000); const minutes = String(Math.floor(elapsed / 60)).padStart(2, '0'); const seconds = String(elapsed % 60).padStart(2, '0'); timerDisplay.textContent = `${minutes}:${seconds}`; }, 1000); }
    function updateActiveNav(id, type) { document.querySelectorAll('#navigation-menu a').forEach(a => a.classList.remove('active')); const selector = id ? `#navigation-menu a[data-id="${id}"][data-type="${type}"]` : `#navigation-menu a[data-type="${type}"]`; const activeLink = document.querySelector(selector); if (activeLink) activeLink.classList.add('active'); }

    function toggleTheme() { document.body.classList.toggle('dark-mode'); const isDark = document.body.classList.contains('dark-mode'); themeToggle.textContent = isDark ? '☀️' : '🌙'; localStorage.setItem('theme', isDark ? 'dark' : 'light'); }
    function renderProgressBars(){ const chaptersProgress = document.getElementById('chapters-progress'); const totalTopics = Object.keys(window.theoreticalContent).length; const completedCount = state.userProgress.completedTopics ? state.userProgress.completedTopics.length : 0; chaptersProgress.innerHTML = `<h3>${completedCount} de ${totalTopics} temas completados</h3><div class="progress-bar"><div class="progress-bar-fill" style="width: ${totalTopics > 0 ? (completedCount/totalTopics)*100 : 0}%;"></div></div>`; const quizzesProgress = document.getElementById('quizzes-progress'); quizzesProgress.innerHTML = ''; Object.keys(window.quizData).forEach(id => { if (!window.quizData[id] || window.quizData[id].questions.length === 0) return; const scores = state.userProgress.quizScores[id] || []; const lastScore = scores.length > 0 ? scores[scores.length - 1] : 0; quizzesProgress.innerHTML += `<div class="progress-bar-container"><div class="progress-label"><span>${window.quizData[id].title}</span><span>${scores.length > 0 ? `Última nota: ${lastScore}%` : 'No intentado'}</span></div><div class="progress-bar"><div class="progress-bar-fill" style="width: ${lastScore}%;"></div></div></div>`; }); }
    
    function saveProgress() { try { localStorage.setItem('hr_userProgress', JSON.stringify(state.userProgress)); } catch (e) { console.error("Error al guardar el progreso:", e); } }
    function loadProgress() { const savedProgress = localStorage.getItem('hr_userProgress'); if (savedProgress) { try { state.userProgress = JSON.parse(savedProgress); state.userProgress.completedTopics = state.userProgress.completedTopics || []; state.userProgress.notes = state.userProgress.notes || {}; state.userProgress.quizScores = state.userProgress.quizScores || {}; } catch (e) { console.error("Error al cargar el progreso:", e); state.userProgress = { completedTopics: [], notes: {}, quizScores: {} }; } } else { state.userProgress = { completedTopics: [], notes: {}, quizScores: {} }; } const savedTheme = localStorage.getItem('theme'); if (savedTheme === 'dark') { document.body.classList.add('dark-mode'); themeToggle.textContent = '☀️'; } else { themeToggle.textContent = '🌙'; } }

    init();
});