// ===== EXAM DATA =====
const examData = {
  sem2: {
    semester: 'Semester II',
    publishedOn: '2026-07-22',
    sgpa: '8.10',
    totalMarks: 881,
    maxMarks: 1200,
    creditsEarned: 23,
    totalCredits: 23,
    subjects: [
      {
        name: 'APPLIED CALCULAS AND DIFFERENTIAL EQUATIONS',
        code: '25AS202',
        type: 'THEORY',
        mid1: { obt: 6, min: 0, max: 15 },
        mid2: { obt: 1, min: 0, max: 15 },
        end: { obt: 12, min: 12, max: 40 },
        external: { obt: 19, min: 21, max: 70 },
        internal: { obt: 24, min: 0, max: 30 },
        total: { obt: 43, min: 40, max: 100 },
        credits: 3, grade: 'E#', gp: 0, cg: 0, result: 'PASS'
      },
      {
        name: 'DATA STRUCTURE USING C++',
        code: '25CS201',
        type: 'THEORY',
        mid1: { obt: 10, min: 0, max: 15 },
        mid2: { obt: 1, min: 0, max: 15 },
        end: { obt: 23, min: 12, max: 40 },
        external: { obt: 34, min: 21, max: 70 },
        internal: { obt: 28, min: 0, max: 30 },
        total: { obt: 62, min: 40, max: 100 },
        credits: 3, grade: 'B', gp: 7, cg: 21, result: 'PASS'
      },
      {
        name: 'APPLIED PHYSICS',
        code: '25AS201',
        type: 'THEORY',
        mid1: { obt: 10, min: 0, max: 15 },
        mid2: { obt: 3, min: 0, max: 15 },
        end: { obt: 17, min: 12, max: 40 },
        external: { obt: 30, min: 21, max: 70 },
        internal: { obt: 29, min: 0, max: 30 },
        total: { obt: 59, min: 40, max: 100 },
        credits: 3, grade: 'C', gp: 6, cg: 18, result: 'PASS'
      },
      {
        name: 'BASICS OF ELECTRICAL ENGINEERING',
        code: '25EL201',
        type: 'THEORY',
        mid1: { obt: 5, min: 0, max: 15 },
        mid2: { obt: 6, min: 0, max: 15 },
        end: { obt: 10, min: 12, max: 40 },
        external: { obt: 21, min: 21, max: 70 },
        internal: { obt: 29, min: 0, max: 30 },
        total: { obt: 50, min: 40, max: 100 },
        credits: 3, grade: 'E#', gp: 0, cg: 0, result: 'PASS'
      },
      {
        name: 'ENVIRONMENT AND SUSTAINABILITY',
        code: '25AS203',
        type: 'THEORY',
        mid1: { obt: 10, min: 0, max: 15 },
        mid2: { obt: 9, min: 0, max: 15 },
        end: { obt: 26, min: 12, max: 40 },
        external: { obt: 45, min: 21, max: 70 },
        internal: { obt: 29, min: 0, max: 30 },
        total: { obt: 74, min: 40, max: 100 },
        credits: 2, grade: 'B+', gp: 8, cg: 16, result: 'PASS'
      },
      {
        name: 'ESSENTIAL OF AI',
        code: '25AI201',
        type: 'THEORY',
        mid1: { obt: 11, min: 0, max: 15 },
        mid2: { obt: 10, min: 0, max: 15 },
        end: { obt: 18, min: 12, max: 40 },
        external: { obt: 39, min: 21, max: 70 },
        internal: { obt: 27, min: 0, max: 30 },
        total: { obt: 66, min: 40, max: 100 },
        credits: 2, grade: 'B', gp: 7, cg: 14, result: 'PASS'
      },
      {
        name: 'WEB DESIGNING WORKSHOP II',
        code: '25VA251',
        type: 'LAB',
        mid1: null,
        mid2: null,
        end: { obt: null, min: null, max: null },
        external: { obt: 46, min: 25, max: 50 },
        internal: { obt: 45, min: 0, max: 50 },
        total: { obt: 91, min: 40, max: 100 },
        credits: 2, grade: 'A+', gp: 10, cg: 20, result: 'PASS'
      },
      {
        name: 'DATA STRUCTURE LAB USING C++',
        code: '25CS251',
        type: 'LAB',
        mid1: null,
        mid2: null,
        end: { obt: null, min: null, max: null },
        external: { obt: 45, min: 25, max: 50 },
        internal: { obt: 45, min: 0, max: 50 },
        total: { obt: 90, min: 40, max: 100 },
        credits: 1, grade: 'A+', gp: 10, cg: 10, result: 'PASS'
      },
      {
        name: 'HOLISTIC SKILL & INNOVATION-II',
        code: '25VA252',
        type: 'LAB',
        mid1: null,
        mid2: null,
        end: { obt: null, min: null, max: null },
        external: { obt: null, min: null, max: null },
        internal: { obt: 81, min: 40, max: 100 },
        total: { obt: 81, min: 40, max: 100 },
        credits: 1, grade: 'A', gp: 9, cg: 9, result: 'PASS'
      },
      {
        name: 'PHYSICS LAB',
        code: '25AS251',
        type: 'LAB',
        mid1: null,
        mid2: null,
        end: { obt: null, min: null, max: null },
        external: { obt: 46, min: 25, max: 50 },
        internal: { obt: 40, min: 0, max: 50 },
        total: { obt: 86, min: 40, max: 100 },
        credits: 1, grade: 'A', gp: 9, cg: 9, result: 'PASS'
      },
      {
        name: 'BASICS OF ELECTRICAL ENGINEERING LAB',
        code: '25EL251',
        type: 'LAB',
        mid1: null,
        mid2: null,
        end: { obt: null, min: null, max: null },
        external: { obt: 46, min: 25, max: 50 },
        internal: { obt: 46, min: 0, max: 50 },
        total: { obt: 92, min: 40, max: 100 },
        credits: 1, grade: 'A+', gp: 10, cg: 10, result: 'PASS'
      },
      {
        name: 'CAD LAB',
        code: '25ME252',
        type: 'LAB',
        mid1: null,
        mid2: null,
        end: { obt: null, min: null, max: null },
        external: { obt: 46, min: 25, max: 50 },
        internal: { obt: 41, min: 0, max: 50 },
        total: { obt: 87, min: 40, max: 100 },
        credits: 1, grade: 'A', gp: 9, cg: 9, result: 'PASS'
      }
    ]
  },
  sem1: {
    semester: 'Semester I',
    publishedOn: '2026-04-09',
    sgpa: '7.70',
    totalMarks: 942,
    maxMarks: 1200,
    creditsEarned: 23,
    totalCredits: 23,
    subjects: [
      {
        name: 'ENGINEERING MATHEMATICS-I',
        code: '25AS101',
        type: 'THEORY',
        mid1: { obt: 12, min: 0, max: 15 },
        mid2: { obt: 8, min: 0, max: 15 },
        end: { obt: 28, min: 12, max: 40 },
        external: { obt: 48, min: 21, max: 70 },
        internal: { obt: 28, min: 0, max: 30 },
        total: { obt: 76, min: 40, max: 100 },
        credits: 3, grade: 'B+', gp: 8, cg: 24, result: 'PASS'
      },
      {
        name: 'ENGINEERING CHEMISTRY',
        code: '25AS102',
        type: 'THEORY',
        mid1: { obt: 11, min: 0, max: 15 },
        mid2: { obt: 10, min: 0, max: 15 },
        end: { obt: 25, min: 12, max: 40 },
        external: { obt: 46, min: 21, max: 70 },
        internal: { obt: 29, min: 0, max: 30 },
        total: { obt: 75, min: 40, max: 100 },
        credits: 3, grade: 'B+', gp: 8, cg: 24, result: 'PASS'
      },
      {
        name: 'INTRODUCTION TO PROGRAMMING USING C',
        code: '25CS101',
        type: 'THEORY',
        mid1: { obt: 12, min: 0, max: 15 },
        mid2: { obt: 11, min: 0, max: 15 },
        end: { obt: 30, min: 12, max: 40 },
        external: { obt: 53, min: 21, max: 70 },
        internal: { obt: 28, min: 0, max: 30 },
        total: { obt: 81, min: 40, max: 100 },
        credits: 3, grade: 'A', gp: 9, cg: 27, result: 'PASS'
      },
      {
        name: 'BASICS OF MECHANICAL ENGINEERING',
        code: '25ME101',
        type: 'THEORY',
        mid1: { obt: 9, min: 0, max: 15 },
        mid2: { obt: 7, min: 0, max: 15 },
        end: { obt: 20, min: 12, max: 40 },
        external: { obt: 36, min: 21, max: 70 },
        internal: { obt: 27, min: 0, max: 30 },
        total: { obt: 63, min: 40, max: 100 },
        credits: 3, grade: 'B', gp: 7, cg: 21, result: 'PASS'
      },
      {
        name: 'COMMUNICATION SKILLS',
        code: '25AS103',
        type: 'THEORY',
        mid1: { obt: 10, min: 0, max: 15 },
        mid2: { obt: 9, min: 0, max: 15 },
        end: { obt: 24, min: 12, max: 40 },
        external: { obt: 43, min: 21, max: 70 },
        internal: { obt: 29, min: 0, max: 30 },
        total: { obt: 72, min: 40, max: 100 },
        credits: 2, grade: 'B+', gp: 8, cg: 16, result: 'PASS'
      },
      {
        name: 'INDIAN CONSTITUTION',
        code: '25AS104',
        type: 'THEORY',
        mid1: { obt: 11, min: 0, max: 15 },
        mid2: { obt: 10, min: 0, max: 15 },
        end: { obt: 27, min: 12, max: 40 },
        external: { obt: 48, min: 21, max: 70 },
        internal: { obt: 28, min: 0, max: 30 },
        total: { obt: 76, min: 40, max: 100 },
        credits: 2, grade: 'B+', gp: 8, cg: 16, result: 'PASS'
      },
      {
        name: 'WEB DESIGNING WORKSHOP I',
        code: '25VA151',
        type: 'LAB',
        mid1: null,
        mid2: null,
        end: { obt: null, min: null, max: null },
        external: { obt: 47, min: 25, max: 50 },
        internal: { obt: 45, min: 0, max: 50 },
        total: { obt: 92, min: 40, max: 100 },
        credits: 2, grade: 'A+', gp: 10, cg: 20, result: 'PASS'
      },
      {
        name: 'C PROGRAMMING LAB',
        code: '25CS151',
        type: 'LAB',
        mid1: null,
        mid2: null,
        end: { obt: null, min: null, max: null },
        external: { obt: 45, min: 25, max: 50 },
        internal: { obt: 44, min: 0, max: 50 },
        total: { obt: 89, min: 40, max: 100 },
        credits: 1, grade: 'A', gp: 9, cg: 9, result: 'PASS'
      },
      {
        name: 'HOLISTIC SKILL & INNOVATION-I',
        code: '25VA152',
        type: 'LAB',
        mid1: null,
        mid2: null,
        end: { obt: null, min: null, max: null },
        external: { obt: null, min: null, max: null },
        internal: { obt: 85, min: 40, max: 100 },
        total: { obt: 85, min: 40, max: 100 },
        credits: 1, grade: 'A', gp: 9, cg: 9, result: 'PASS'
      },
      {
        name: 'CHEMISTRY LAB',
        code: '25AS151',
        type: 'LAB',
        mid1: null,
        mid2: null,
        end: { obt: null, min: null, max: null },
        external: { obt: 46, min: 25, max: 50 },
        internal: { obt: 42, min: 0, max: 50 },
        total: { obt: 88, min: 40, max: 100 },
        credits: 1, grade: 'A', gp: 9, cg: 9, result: 'PASS'
      },
      {
        name: 'BASICS OF MECHANICAL ENGINEERING LAB',
        code: '25ME151',
        type: 'LAB',
        mid1: null,
        mid2: null,
        end: { obt: null, min: null, max: null },
        external: { obt: 47, min: 25, max: 50 },
        internal: { obt: 45, min: 0, max: 50 },
        total: { obt: 92, min: 40, max: 100 },
        credits: 1, grade: 'A+', gp: 10, cg: 10, result: 'PASS'
      },
      {
        name: 'MANUFACTURING PRACTICES',
        code: '25ME152',
        type: 'LAB',
        mid1: null,
        mid2: null,
        end: { obt: null, min: null, max: null },
        external: { obt: 45, min: 25, max: 50 },
        internal: { obt: 8, min: 0, max: 50 },
        total: { obt: 53, min: 40, max: 100 },
        credits: 1, grade: 'C', gp: 6, cg: 6, result: 'PASS'
      }
    ]
  }
};

// ===== DASHBOARD: MENU LOGIC =====
function toggleMenu(menuId, event) {
  event.stopPropagation();
  closeAllMenus();
  const menu = document.getElementById(menuId);
  const overlay = document.getElementById('overlay');
  if (menu) {
    menu.classList.add('show');
    overlay.classList.add('show');
  }
}

function showSubMenu(semKey, event) {
  event.stopPropagation();
  const main = document.getElementById('main-' + semKey);
  const sub = document.getElementById('sub-' + semKey);
  if (main) main.style.display = 'none';
  if (sub) sub.classList.add('show');
}

function hideSubMenu(semKey, event) {
  event.stopPropagation();
  const main = document.getElementById('main-' + semKey);
  const sub = document.getElementById('sub-' + semKey);
  if (sub) sub.classList.remove('show');
  if (main) main.style.display = '';
}

function closeAllMenus() {
  document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
  document.querySelectorAll('.sub-dropdown').forEach(m => m.classList.remove('show'));
  document.querySelectorAll('.menu-main').forEach(m => m.style.display = '');
  const overlay = document.getElementById('overlay');
  if (overlay) overlay.classList.remove('show');
}

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeAllMenus();
});

// ===== NAVIGATION =====
function goToResult(sem, term) {
  window.location.href = `result.html?sem=${sem}&term=${term}`;
}

// ===== TAB TOGGLE =====
const tabSemester = document.getElementById('tabSemester');
const tabAnnual = document.getElementById('tabAnnual');
const semesterView = document.getElementById('cardsContainer');
const annualView = document.getElementById('annualContainer');
const pageTitle = document.getElementById('pageTitle');

if (tabSemester && tabAnnual) {
  tabSemester.addEventListener('click', () => {
    tabSemester.classList.add('active');
    tabAnnual.classList.remove('active');
    if (semesterView) semesterView.style.display = '';
    if (annualView) annualView.style.display = 'none';
    if (pageTitle) {
      pageTitle.innerHTML = '<h1>Semester Examination Dashboard</h1><p>Semester-wise exam cards and actions.</p>';
    }
  });
  tabAnnual.addEventListener('click', () => {
    tabAnnual.classList.add('active');
    tabSemester.classList.remove('active');
    if (semesterView) semesterView.style.display = 'none';
    if (annualView) annualView.style.display = '';
    if (pageTitle) {
      pageTitle.innerHTML = '<h1>Annual Examination Dashboard</h1><p>Year-wise overview with semester cards and annual summary.</p>';
    }
  });
}

// ===== RESULT PAGE RENDERING =====
function renderResultPage() {
  const params = new URLSearchParams(window.location.search);
  const sem = params.get('sem') || 'sem2';
  const data = examData[sem];
  if (!data) return;

  // Update header info
  const semEl = document.getElementById('resultSemester');
  const pubEl = document.getElementById('resultPublishedOn');
  const sgpaEl = document.getElementById('summSGPA');
  const marksEl = document.getElementById('summMarks');
  const marksTotalEl = document.getElementById('summMarksTotal');
  const creditsEl = document.getElementById('summCredits');
  const creditsTotalEl = document.getElementById('summCreditsTotal');

  if (semEl) semEl.textContent = data.semester;
  if (pubEl) pubEl.textContent = data.publishedOn;
  if (sgpaEl) sgpaEl.innerHTML = `${data.sgpa} <span class="small">SGPA</span>`;
  if (marksEl) marksEl.textContent = data.totalMarks;
  if (marksTotalEl) marksTotalEl.textContent = data.maxMarks;
  if (creditsEl) creditsEl.textContent = data.creditsEarned;
  if (creditsTotalEl) creditsTotalEl.textContent = `/${data.totalCredits}`;

  // Render table
  const tbody = document.getElementById('marksBody');
  if (!tbody) return;

  let totalObt = 0;
  let totalCredits = 0;
  let totalCG = 0;

  tbody.innerHTML = '';

  data.subjects.forEach(sub => {
    const tr = document.createElement('tr');

    // Determine color class for total marks
    let totalColorClass = 'medium';
    if (sub.total.obt >= 80) totalColorClass = 'high';
    else if (sub.total.obt >= 60) totalColorClass = 'medium';
    else totalColorClass = 'low';

    // Grade badge class
    let gradeClass = 'grade-E';
    const g = sub.grade.replace('#', '').replace('+', 'plus');
    gradeClass = `grade-${g}`;

    // Format marks cell
    const fmtMarks = (m) => {
      if (!m || m.obt === null || m.obt === undefined) return `<span class="dash">—</span>`;
      return `<span class="marks-obtained">${m.obt}</span><span class="marks-range">${m.min} / ${m.max}</span>`;
    };

    const badgeClass = sub.type === 'LAB' ? 'badge-lab' : 'badge-theory';

    tr.innerHTML = `
      <td>
        <div class="subject-name">${sub.name}</div>
        <div class="subject-code">${sub.code} <span class="subject-type-badge ${badgeClass}">${sub.type}</span></div>
      </td>
      <td>${fmtMarks(sub.mid1)}</td>
      <td>${fmtMarks(sub.mid2)}</td>
      <td>${sub.type === 'LAB' && (!sub.end || sub.end.obt === null) ? '<span class="dash">—</span>' : fmtMarks(sub.end)}</td>
      <td>${fmtMarks(sub.external)}</td>
      <td>${fmtMarks(sub.internal)}</td>
      <td><span class="total-marks ${totalColorClass}">${sub.total.obt}</span><span class="marks-range">${sub.total.min} / ${sub.total.max}</span></td>
      <td><span class="marks-obtained">${sub.credits}</span></td>
      <td><span class="grade-badge ${gradeClass}">${sub.grade}</span></td>
      <td><span class="marks-obtained">${sub.gp}</span></td>
      <td><span class="marks-obtained">${sub.cg}</span></td>
      <td><span class="result-pass">${sub.result}</span></td>
    `;

    tbody.appendChild(tr);
    totalObt += sub.total.obt;
    totalCredits += sub.credits;
    totalCG += sub.cg;
  });

  // Summary row
  const summaryRow = document.createElement('tr');
  summaryRow.className = 'summary-row';
  summaryRow.innerHTML = `
    <td><span class="summary-link">SUMMARY</span></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><span class="total-marks high">${totalObt}</span><span class="marks-range">/ ${data.maxMarks}</span></td>
    <td><span class="marks-obtained">${totalCredits}</span></td>
    <td></td>
    <td></td>
    <td><span class="marks-obtained">${totalCG}</span></td>
    <td></td>
  `;
  tbody.appendChild(summaryRow);
}
