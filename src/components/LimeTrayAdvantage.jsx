import React from "react";

const advantages = [
  {
    title: "Customer Support",
    icon: "data:img/png;base64,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", // Replace with actual path
    description:
      "Our support team is available on call & live chat 7 days a week, throughout the year.",
  },
  {
    title: "Dedicated Account Manager",
    icon: "data:img/png;base64,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", // Replace with actual path
    description:
      "You will get a dedicated account manager to help you with everything related to our products & services.",
  },
  {
    title: "Platform",
    icon: "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA2CAMAAACsuQomAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABFFBMVEUAAAAFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgJHxUZfEUHEg4VZjohr18ismEGCgoSUS4gplsOOyMemVQKJxkbhkoIGBEXcT8isWEGDgsTWzQhq10FCAkQRikfoFgMMR4ckE8KIxcAAABPVcU4AAAAQXRSTlMANsQepR0NhfeEDANl6GQCRdJEKbW0KBWV/JQUB3XwdAYBVd5UNaRz83sJ4lvKPKsi+YsQ62sE10u7Lv2bGNDg0+xaIWgAAAABYktHRACIBR1IAAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH4wsFEigBKfLrjQAAAlJJREFUSMel19dWAjEQBuClqNix97Ko2LCAveLaYsVe3/9BnCTgps0E8b9RJ5lzOO6XyRIERBLJZCJoLKl0BEk3NdDa3JKJRDKtbX9sbe/ohL7Ts7NT+NHZ1f2X3mwP9JxfXDJ2eXEOv/b01t3a1w/7r65vmMjN9RX8OTBYV+vQ8Ahsvr1jv7m7hcLI6Ji3dXxiEnbeV5iWyj0UJ6emydYwNwO7Hh6fmJGnxwdYmJklehNJ2PH88soceX15hsXkHNLaxFG8vX8wJB/vb7Ah70LT1spRfH4xIl+fTjTdXRIF88SFpvcXhS8WmsEBFYUvGpqxUROFLzGaeY7iu1J/K0/lm6OZJ58tluozTxCqsFS15ULCM/qRhfOJceIk0f+s4SHiDGORj6m/z/KZ9UKpAsm6DkZtbmG9kmZHO3Ku5MR0Hw55KFqaiROdQo6lPI7plGcOudDEKIwIIguLS/go0lHwLC0uiEqNyHIhXtPRWCjCwrJSkURWVuOPE6OxUayuGBVBJFpbt9BYKNbXIpuJIFIsbRgVA8VGqehkIolsbm3rFRXF9tYmykQS2dlVKyqK3R2SibzO9/Zda/t7kY+JIHJweGTWjw4P3Ey0hBaaIEYRmrtzx+Vy+cQioqCpolDuyLBwAk3HOZxIrSJRqLezxgQhIioShfpeYDFBiBRLEoXyRuJighCJjGsNY+IikjEuVIKJTSSVV69yDxOMCI+fiZMID8pEiz1XAnN2ULHRWLODio7GOTuoxGiw2UGlhoaYHVT+8bLOI9HkG/mawANfUOao9R+9G2gRk7eqoAAAAABJRU5ErkJggg==", // Replace with actual path
    description:
      "All greenwheels products talk to each other which means you get visibility of your entire business on a single platform.",
    link: {
      text: "See all products",
      href: "#",
    },
  },
  {
    title: "Integrations",
    icon: "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAA3CAMAAAB+bjclAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABEVBMVEUAAAAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAFBwgFBwgFBwgFBwgFBwgjHyAjJyQjHyAjHyAjHyAjHyAjJCMjHyAjIyIjJiMjHyAjHyAjHyAjHyAjJSMjHyAjHyAFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgFBwgjHyAjTzUjVjgjPi4ioFkismEicUQjLycjMSgjMCcjKSQFBwg+P0DR0dG0tbVQUVH///8jOiwjaEAjIyIjUjciqV1OUFDp6enKyssRTS0VYjgLKhoYe0QSUi8OOyMJHBMWFxgXGRpgYmJxcXJ6e3yJiouTlJWio6SrrK27vLxUVVZzdHRZWlsAAABxyDgDAAAALXRSTlMAgEBgwNzMMHBNsCFogEjQkCT+yCAOCv5Q/v7kkD8t/qB4cIaSqbTL1ez8DRDnY2wDAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+MLBRIlFYaGQb0AAAE9SURBVFjD7dbXTsMwFIDhFAwt07RlpqyylzEECodSOtiUveH9XwSncSJFQupxbWgE+a9zPlmJLceympZgXh3NH0WUYJuc8y1j2rbjODuxpqztFvYK+4a0TkK6WDchSSOaKMWMUbEWEa2nt8+gFpX6B7ANIjQK2IbaoB0UER1itdIRomKs/RMt6ZXW0tJSseQvC9HSiFQsVq6Iqppa1UXKQuPiIncy2eFGI4raqDeWzbgI97UxudSUojYu5yZCmp2bbDSlqE17Y7kZX6sdi2zN92a7SI0Z/qazXnktLS+Vnz9ZJ6eIztpzLxjWzi8QXWK1KwdR/S9o13VENxHYIbclv7sWtFBzAPfBYXqAedX5cAsAj4H2BIt62hLAc6C9wLKetgLwGmhvsKpjUboG8P7h9wlA6XrL2nfbYuP3tC/cWGfcaAwjggAAAABJRU5ErkJggg==", // Replace with actual path
    description:
      "Manage all essential integrations - third-parties, POS, online payments & more - on greenwheels’s platform.",
    link: {
      text: "See Integrations",
      href: "#",
    },
  },
];

const greenwheelsAdvantage = () => {
  return (
    <section className=" py-16 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">
        The greenwheels Advantage
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto text-left">
        {advantages.map((item, idx) => (
          <div key={idx} className="flex items-start space-x-4">
            <img src={item.icon} alt={item.title} className="w-12 h-12 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-1">{item.description}</p>
              {item.link && (
                <a
                  href={item.link.href}
                  className="text-green-600 font-semibold text-sm mt-2 inline-block hover:underline"
                >
                  {item.link.text}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default greenwheelsAdvantage;
