type Props = {
  title: string
  colors: { className: string; name: string }[]
}

function Colors({ title, colors }: Props) {
  return (
    <div className="flex flex-col gap-2 ">
      <h1 className="text-xl font-bold ">{title}</h1>
      <div className="grid auto-cols-fr grid-flow-col w-full h-20">
        {colors.map((color) => (
          <div
            key={color.name}
            className={`${color.className} relative justify-center items-center`}
          >
            <span className="absolute bottom-[-35px] ">{color.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function AllPalettes() {
  return (
    <div className="flex flex-col gap-20 p-8">
      <Colors
        title="Dark"
        colors={[
          { className: 'bg-dark-0', name: 'Dark-0' },
          { className: 'bg-dark-1', name: 'Dark-1' },
          { className: 'bg-dark-2', name: 'Dark-2' },
          { className: 'bg-dark-3', name: 'Dark-3' },
          { className: 'bg-dark-4', name: 'Dark-4' },
          { className: 'bg-dark-5', name: 'Dark-5' },
          { className: 'bg-dark-6', name: 'Dark-6' },
          { className: 'bg-dark-7', name: 'Dark-7' },
          { className: 'bg-dark-8', name: 'Dark-8' },
          { className: 'bg-dark-9', name: 'Dark-9' }
        ]}
      />

      <Colors
        title="Gray"
        colors={[
          { className: 'bg-gray-0', name: 'Gray-0' },
          { className: 'bg-gray-1', name: 'Gray-1' },
          { className: 'bg-gray-2', name: 'Gray-2' },
          { className: 'bg-gray-3', name: 'Gray-3' },
          { className: 'bg-gray-4', name: 'Gray-4' },
          { className: 'bg-gray-5', name: 'Gray-5' },
          { className: 'bg-gray-6', name: 'Gray-6' },
          { className: 'bg-gray-7', name: 'Gray-7' },
          { className: 'bg-gray-8', name: 'Gray-8' },
          { className: 'bg-gray-9', name: 'Gray-9' }
        ]}
      />

      <Colors
        title="Red"
        colors={[
          { className: 'bg-red-0', name: 'Red-0' },
          { className: 'bg-red-1', name: 'Red-1' },
          { className: 'bg-red-2', name: 'Red-2' },
          { className: 'bg-red-3', name: 'Red-3' },
          { className: 'bg-red-4', name: 'Red-4' },
          { className: 'bg-red-5', name: 'Red-5' },
          { className: 'bg-red-6', name: 'Red-6' },
          { className: 'bg-red-7', name: 'Red-7' },
          { className: 'bg-red-8', name: 'Red-8' },
          { className: 'bg-red-9', name: 'Red-9' }
        ]}
      />

      <Colors
        title="Pink"
        colors={[
          { className: 'bg-pink-0', name: 'Pink-0' },
          { className: 'bg-pink-1', name: 'Pink-1' },
          { className: 'bg-pink-2', name: 'Pink-2' },
          { className: 'bg-pink-3', name: 'Pink-3' },
          { className: 'bg-pink-4', name: 'Pink-4' },
          { className: 'bg-pink-5', name: 'Pink-5' },
          { className: 'bg-pink-6', name: 'Pink-6' },
          { className: 'bg-pink-7', name: 'Pink-7' },
          { className: 'bg-pink-8', name: 'Pink-8' },
          { className: 'bg-pink-9', name: 'Pink-9' }
        ]}
      />

      <Colors
        title="Grape"
        colors={[
          { className: 'bg-grape-0', name: 'Grape-0' },
          { className: 'bg-grape-1', name: 'Grape-1' },
          { className: 'bg-grape-2', name: 'Grape-2' },
          { className: 'bg-grape-3', name: 'Grape-3' },
          { className: 'bg-grape-4', name: 'Grape-4' },
          { className: 'bg-grape-5', name: 'Grape-5' },
          { className: 'bg-grape-6', name: 'Grape-6' },
          { className: 'bg-grape-7', name: 'Grape-7' },
          { className: 'bg-grape-8', name: 'Grape-8' },
          { className: 'bg-grape-9', name: 'Grape-9' }
        ]}
      />

      <Colors
        title="Violet"
        colors={[
          { className: 'bg-violet-0', name: 'Violet-0' },
          { className: 'bg-violet-1', name: 'Violet-1' },
          { className: 'bg-violet-2', name: 'Violet-2' },
          { className: 'bg-violet-3', name: 'Violet-3' },
          { className: 'bg-violet-4', name: 'Violet-4' },
          { className: 'bg-violet-5', name: 'Violet-5' },
          { className: 'bg-violet-6', name: 'Violet-6' },
          { className: 'bg-violet-7', name: 'Violet-7' },
          { className: 'bg-violet-8', name: 'Violet-8' },
          { className: 'bg-violet-9', name: 'Violet-9' }
        ]}
      />

      <Colors
        title="Indigo"
        colors={[
          { className: 'bg-indigo-0', name: 'Indigo-0' },
          { className: 'bg-indigo-1', name: 'Indigo-1' },
          { className: 'bg-indigo-2', name: 'Indigo-2' },
          { className: 'bg-indigo-3', name: 'Indigo-3' },
          { className: 'bg-indigo-4', name: 'Indigo-4' },
          { className: 'bg-indigo-5', name: 'Indigo-5' },
          { className: 'bg-indigo-6', name: 'Indigo-6' },
          { className: 'bg-indigo-7', name: 'Indigo-7' },
          { className: 'bg-indigo-8', name: 'Indigo-8' },
          { className: 'bg-indigo-9', name: 'Indigo-9' }
        ]}
      />

      <Colors
        title="Blue"
        colors={[
          { className: 'bg-blue-0', name: 'Blue-0' },
          { className: 'bg-blue-1', name: 'Blue-1' },
          { className: 'bg-blue-2', name: 'Blue-2' },
          { className: 'bg-blue-3', name: 'Blue-3' },
          { className: 'bg-blue-4', name: 'Blue-4' },
          { className: 'bg-blue-5', name: 'Blue-5' },
          { className: 'bg-blue-6', name: 'Blue-6' },
          { className: 'bg-blue-7', name: 'Blue-7' },
          { className: 'bg-blue-8', name: 'Blue-8' },
          { className: 'bg-blue-9', name: 'Blue-9' }
        ]}
      />

      <Colors
        title="Cyan"
        colors={[
          { className: 'bg-cyan-0', name: 'Cyan-0' },
          { className: 'bg-cyan-1', name: 'Cyan-1' },
          { className: 'bg-cyan-2', name: 'Cyan-2' },
          { className: 'bg-cyan-3', name: 'Cyan-3' },
          { className: 'bg-cyan-4', name: 'Cyan-4' },
          { className: 'bg-cyan-5', name: 'Cyan-5' },
          { className: 'bg-cyan-6', name: 'Cyan-6' },
          { className: 'bg-cyan-7', name: 'Cyan-7' },
          { className: 'bg-cyan-8', name: 'Cyan-8' },
          { className: 'bg-cyan-9', name: 'Cyan-9' }
        ]}
      />

      <Colors
        title="Teal"
        colors={[
          { className: 'bg-teal-0', name: 'Teal-0' },
          { className: 'bg-teal-1', name: 'Teal-1' },
          { className: 'bg-teal-2', name: 'Teal-2' },
          { className: 'bg-teal-3', name: 'Teal-3' },
          { className: 'bg-teal-4', name: 'Teal-4' },
          { className: 'bg-teal-5', name: 'Teal-5' },
          { className: 'bg-teal-6', name: 'Teal-6' },
          { className: 'bg-teal-7', name: 'Teal-7' },
          { className: 'bg-teal-8', name: 'Teal-8' },
          { className: 'bg-teal-9', name: 'Teal-9' }
        ]}
      />

      <Colors
        title="Green"
        colors={[
          { className: 'bg-green-0', name: 'Green-0' },
          { className: 'bg-green-1', name: 'Green-1' },
          { className: 'bg-green-2', name: 'Green-2' },
          { className: 'bg-green-3', name: 'Green-3' },
          { className: 'bg-green-4', name: 'Green-4' },
          { className: 'bg-green-5', name: 'Green-5' },
          { className: 'bg-green-6', name: 'Green-6' },
          { className: 'bg-green-7', name: 'Green-7' },
          { className: 'bg-green-8', name: 'Green-8' },
          { className: 'bg-green-9', name: 'Green-9' }
        ]}
      />

      <Colors
        title="Lime"
        colors={[
          { className: 'bg-lime-0', name: 'Lime-0' },
          { className: 'bg-lime-1', name: 'Lime-1' },
          { className: 'bg-lime-2', name: 'Lime-2' },
          { className: 'bg-lime-3', name: 'Lime-3' },
          { className: 'bg-lime-4', name: 'Lime-4' },
          { className: 'bg-lime-5', name: 'Lime-5' },
          { className: 'bg-lime-6', name: 'Lime-6' },
          { className: 'bg-lime-7', name: 'Lime-7' },
          { className: 'bg-lime-8', name: 'Lime-8' },
          { className: 'bg-lime-9', name: 'Lime-9' }
        ]}
      />

      <Colors
        title="Yellow"
        colors={[
          { className: 'bg-yellow-0', name: 'Yellow-0' },
          { className: 'bg-yellow-1', name: 'Yellow-1' },
          { className: 'bg-yellow-2', name: 'Yellow-2' },
          { className: 'bg-yellow-3', name: 'Yellow-3' },
          { className: 'bg-yellow-4', name: 'Yellow-4' },
          { className: 'bg-yellow-5', name: 'Yellow-5' },
          { className: 'bg-yellow-6', name: 'Yellow-6' },
          { className: 'bg-yellow-7', name: 'Yellow-7' },
          { className: 'bg-yellow-8', name: 'Yellow-8' },
          { className: 'bg-yellow-9', name: 'Yellow-9' }
        ]}
      />

      <Colors
        title="Orange"
        colors={[
          { className: 'bg-orange-0', name: 'Orange-0' },
          { className: 'bg-orange-1', name: 'Orange-1' },
          { className: 'bg-orange-2', name: 'Orange-2' },
          { className: 'bg-orange-3', name: 'Orange-3' },
          { className: 'bg-orange-4', name: 'Orange-4' },
          { className: 'bg-orange-5', name: 'Orange-5' },
          { className: 'bg-orange-6', name: 'Orange-6' },
          { className: 'bg-orange-7', name: 'Orange-7' },
          { className: 'bg-orange-8', name: 'Orange-8' },
          { className: 'bg-orange-9', name: 'Orange-9' }
        ]}
      />

      <Colors
        title="Solids"
        colors={[
          { className: 'bg-white', name: 'White' },
          { className: 'bg-black', name: 'Black' }
        ]}
      />
    </div>
  )
}

export { Colors, AllPalettes }
