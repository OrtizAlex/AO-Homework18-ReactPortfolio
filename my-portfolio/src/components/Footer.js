import React from 'react';

export default function Footer() {
    return (
        <footer class="bg-dark text-center text-white">
            <div class="container p-4">
                <section class="mb-4">
                    <a class="btn btn-outline-light btn-floating m-1" href="mailto:ortiz.alex.d@outlook.com" role="button"
                        ><i class="fa fa-google"></i
                    ></a>
                    <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/ortizalexd" role="button"
                        ><i class="fa fa-linkedin"></i
                    ></a>
                    <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/OrtizAlex" role="button"
                        ><i class="fa fa-github"></i
                    ></a>
                </section>
            </div>
            <div>
                <p>Looking forward to working together one day. Thank you.</p>
                <p>&copy; Alex Ortiz</p>
            </div>
        </footer>
    );
}