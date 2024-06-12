export const getDataHome = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/6655261cb6cce150ff0981b9?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`,
      {
        next: {
          revalidate: 120,
        },
      }
    )

    if (!res.ok) {
      throw new Error("Failed to fetch Home data")
    }

    return res.json()
  } catch (error) {
    throw new Error("Failed to fetch Home data")
  }
}

export const getSubMenu = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&read_key=${process.env.READ_KEY}&depth=1&props=slug,title`,
      {
        next: {
          revalidate: 120,
        },
      }
    )

    if (!res.ok) {
      throw new Error("Failed to fetch Menu data")
    }

    return res.json()
  } catch (error) {
    throw new Error("Failed to fetch Menu data")
  }
}