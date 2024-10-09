import React, { useState } from 'react';
import DetailsButton from './DetailsButton';

const SizesPrompt = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={openModal} className="">
      <>⬜</><DetailsButton style="outlined" size="normal" outline="medium">
                 Sizes
                </DetailsButton>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-96 rounded-lg shadow-lg p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              X
            </button>

            <h2 className="text-xl font-semibold mb-4">Таблиця мірок</h2>

            <p className="text-sm mb-2">
              Мірки потрібно заміряти по довжині устілки із взуття. Якщо ви все зробите правильно, помилитися з розміром у вас не буде шансу.
            </p>

            <div className="flex justify-center mb-4">
              <img
                src="/path-to-your-image.png"
                alt="Таблиця мірок"
                className="w-32"
              />
            </div>

            <table className="w-full text-center">
              <thead>
                <tr>
                  <th>36</th>
                  <th>37</th>
                  <th>38</th>
                  <th>39</th>
                  <th>40</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>23.5</td>
                  <td>24</td>
                  <td>25</td>
                  <td>25.5</td>
                  <td>26</td>
                </tr>
              </tbody>
            </table>

            <h3 className="mt-4 text-lg font-semibold">Як правильно зняти мірки?</h3>
            <div className="mt-2">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/sample-video-id"
                title="Як зняти мірки"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SizesPrompt;
