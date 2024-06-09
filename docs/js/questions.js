// questions.js

document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
            id: "q1",
            question: "1. Profit or loss",
            description: "Can the you <em>(the worker)</em> make a profit or suffer a loss as a result of the work, aside from the money earned from the project?",
            hint: "This should involve real economic risk-not just the risk of not getting paid."
        },
        {
            id: "q2",
            question: "2. Investment",
            description: "Do you <em>(the worker)</em> have an investment in the equipment and facilities used to do the work?",
            hint: "The greater the investment, the more likely independent contractor status."
        },
        {
            id: "q3",
            question: "3. Works for more than one firm",
            description: "Do you <em>(the worker)</em> work for more than one company at a time?",
            hint: "This tends to indicate independent contractor status, but isn’t conclusive since employees can also work for more than one employer."
        },
        {
            id: "q4",
            question: "4. Services offered to the general public",
            description: "Do you <em>(the worker)</em> offer services to the general public?"
        },
        {
            id: "q5",
            question: "5. Instructions",
            description: "Does the employee have the right to give you <em>(the worker)</em> instructions about when, where, and how to work?",
            // description: "Do you have the right to give the worker instructions about when, where, and how to work? (This shows control over the worker.)",
            hint: "This shows control over you <em>(the worker)</em>."
        },
        {
            id: "q6",
            question: "6. Training",
            description: "Does the employee train you <em>(the worker)</em> to do the job in a particular way?",
            // description: "Do you train the worker to do the job in a particular way? (Independent contractors are already trained.)"
            hint: "Independent contractors are already trained."
        },
        {
            id: "q7",
            question: "7. Integration",
            description: "Are your <em>(the worker's)</em> services so important to the business that they have become a necessary part of the business?",
            // description: "Are the worker’s services so important to your business that they have become a necessary part of the business? (This may show that the worker is subject to your control.)",
            hint: "This may show that you <em>(the worker)</em> is subject to the employee's your control."
        },
        {
            id: "q8",
            question: "8. Services rendered personally",
            description: "Must you <em>(the worker)</em> provide the services personally, as opposed to delegating tasks to someone else?",
            hint: "This indicates that the employee is interested in the methods employed, and not just the results."
        },
        {
            id: "q9",
            question: "9. Hiring assistants",
            description: "Does the employee hire, supervise, and pay your <em>(the worker)</em>'s assistants?",
            hint: "Independent contractors hire and pay their own staff."
            // description: "Do you hire, supervise, and pay the worker’s assistants? (Independent contractors hire and pay their own staff.)"
        },
        {
            id: "q10",
            question: "10. Continuing relationship",
            description: "Is there an ongoing relationship between you <em>(the worker)</em> and the employee?",
            hint: "A relationship can be considered ongoing if services are performed frequently, but irregularly."
        },
        {
            id: "q11",
            question: "11. Work hours",
            description: "Does the employee set your <em>(the worker's)</em> hours?",
            hint: "Independent contractors set their own hours."
        },
        {
            id: "q12",
            question: "12. Full-time work",
            description: "Must the you <em>(the worker)</em> spend all of their time on your job?",
            hint: "Independent contractors choose when and where they will work."
        },
        {
            id: "q13",
            question: "13. Work done on premises",
            description: "Must you <em>(the worker)</em> work on a specific premises, or does the employee control the route or location where the work must be performed?",
            hint: "Answering no doesn’t by itself mean independent contractor status."
        },
        {
            id: "q14",
            question: "14. Sequence",
            description: "Does the employee have the right to determine the order in which services are performed?",
            hint: "This shows control over you <em>(the worker)</em>."
        },
        {
            id: "q15",
            question: "15. Reports",
            description: "Must you <em>(the worker)</em> give you reports accounting for their actions?",
            hint: "This may show lack of independence."
        },
        {
            id: "q16",
            question: "16. Pay Schedules",
            description: "Does the employer pay the you <em>(the worker)</em> by hour, week, or month?",
            hint: "Independent contractors are generally paid by the job or commission, although by industry practice, some are paid by the hour."
        },
        {
            id: "q17",
            question: "17. Expenses",
            description: "Does the employer pay your <em>(the worker's)</em> business or travel costs?",
            hint: "This tends to show control"
        },
        {
            id: "q18",
            question: "18. Tools and materials",
            description: "Does the employer provide you <em>(the worker)</em> with equipment, tools, or materials?",
            hint: "Independent contractors generally supply the materials for the job and use their own tools and equipment."
        },
        {
            id: "q19",
            question: "19. Right to fire",
            description: "Can the employer fire the you <em>(the worker)</em>?",
            hint: "An independent contractor can’t be fired without subjecting you to the risk of breach of contract lawsuit."
        },
        {
            id: "q20",
            question: "20. Worker’s right to quit",
            description: "Can you <em>(the worker)</em> quit at any time, without incurring liability?",
            hint: "An independent contractor has a legal obligation to complete the contract."
        }
    ];

    const container = document.querySelector('.questions-container');

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionLabel = document.createElement('h3');
        questionLabel.textContent = q.question;
        questionDiv.appendChild(questionLabel);

        const descriptionLabel = document.createElement('label');
        descriptionLabel.setAttribute('for', q.id);
        descriptionLabel.innerHTML = q.description;
        questionDiv.appendChild(descriptionLabel);

        if (q.hint) {
            questionDiv.appendChild(document.createElement('br'));
            const hintLabel = document.createElement('small');
            hintLabel.classList.add('hint');
            hintLabel.innerHTML = q.hint;
            questionDiv.appendChild(hintLabel);
        }

        questionDiv.appendChild(document.createElement('br'));

        ['yes', 'no'].forEach(value => {
            const input = document.createElement('input');
            input.type = 'radio';
            input.id = `${q.id}-${value}`;
            input.name = q.id;
            input.value = value;
            questionDiv.appendChild(input);

            const label = document.createElement('label');
            label.setAttribute('for', `${q.id}-${value}`);
            label.classList.add('btn-radio');
            label.textContent = value.charAt(0).toUpperCase() + value.slice(1);
            questionDiv.appendChild(label);
        });

        container.appendChild(questionDiv);

        // Insert <h2> after question 4
        if (index === 3) {
            const note = document.createElement('h2');
            note.textContent = 'If you answer "Yes" to any of the following questions, you are likely an Employee.';
            container.appendChild(note);
        }
    });
});
