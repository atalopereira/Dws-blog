import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { FilterList } from "../../components/FilterList";

describe('Filter List component', () => {
  const mockAuthors = [
    {
      id: "1",
      name: "Grace Doe",
    },
    {
      id: "2",
      name: "Jack Smith",
    }
  ]

  const mockCategories = [
    {
        id: "1",
        name: "Technology",
    },
    {
        id: "2",
        name: "Science",
    },
  ]

  it('Should render categories and authors', () => {
    const mockFn = jest.fn();

    render(
      <FilterList
        authors={mockAuthors}
        categories={mockCategories}
        authorsSelected={[]}
        categoriesSelected={[]}
        onChange={mockFn}
      />
    );

    expect(screen.getByText('Filters')).toBeInTheDocument();
    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByText('Author')).toBeInTheDocument();
    expect(screen.getByText('Technology')).toBeInTheDocument();
    expect(screen.getByText('Science')).toBeInTheDocument();
  });

  it('Should select and unselect category item when clicked', () => {
    const mockFn = jest.fn();

    render (
      <FilterList
        authors={mockAuthors}
        categories={mockCategories}
        authorsSelected={[]}
        categoriesSelected={[]}
        onChange={mockFn}
      />
    )

    const categoryItem = screen.getByText('Technology');

    fireEvent.click(categoryItem);
    expect(categoryItem).toHaveClass('selected');

    fireEvent.click(categoryItem);
    expect(categoryItem).not.toHaveClass('selected');
  });

  it('Should call onChange when submit filters', () => {
    const mockFn = jest.fn();

    render (
      <FilterList
        authors={mockAuthors}
        categories={mockCategories}
        authorsSelected={[]}
        categoriesSelected={[]}
        onChange={mockFn}
      />
    )

    const categoryItem = screen.getByText('Technology');
    const authorItem = screen.getByText('Grace Doe');

    fireEvent.click(categoryItem);
    fireEvent.click(authorItem);

    fireEvent.submit(screen.getByText("Apply filters"));

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith({
      categories: [{ id: '1', name: 'Technology' }],
      authors: [{ id: '1', name: 'Grace Doe' }]
    });
  });

  it('Should initialize with categories and authors selected', () => {
    const mockFn = jest.fn();

    render (
      <FilterList
        authors={mockAuthors}
        categories={mockCategories}
        authorsSelected={[mockAuthors[0]]}
        categoriesSelected={[mockCategories[1]]}
        onChange={mockFn}
      />
    )

    expect(screen.getByText('Grace Doe')).toHaveClass('selected');
    expect(screen.getByText('Science')).toHaveClass('selected');
  })
})